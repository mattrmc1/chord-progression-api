import mapProgression from '../helpers/mapProgression';
import getRelative from '../helpers/getRelative';
import directAccessClient from '../db/util/directAccessClient';
import checkProgressionInsert from '../helpers/checkProgressionInsert';

// TODO: Break up this file into smaller files

export default {
  getSongById: async ({ id, key, mode }, { sort = 'title', direction = 'asc' }) => {
    // TODO: implement sort and direction
    let data = await directAccessClient(`
      SELECT * FROM songs WHERE id = ?
    `, [id]);
    data = data[0];
    data.progression = JSON.parse(data.progression);
    data['originalKey'] = data.root;
    data['originalMode'] = data.mode;
    
    if (key) {
      mode = mode ? mode : data.mode;
      let target = { root: key, mode };
      let { root, signature } = getRelative(data, target);
      data.root = root;
      data.keySignature = signature;
    }
    data.progression = mapProgression(data);
    return data;
  },

  getSongs: async root => {
    // TODO: Handle query direct from GQL that doesn't send req.query
    if (!root || !root.req || !root.req.query) {
      return await directAccessClient(`
        SELECT * FROM songs
      `)
    }
    let { search } = root.req.query
    let author = `%${search}%`;
    // TODO: implmenet key, sort, and direction
    return await directAccessClient(`
      SELECT * FROM songs WHERE title SOUNDS LIKE ? OR author LIKE ?
    `, [search, author]);
  },

  insertSong: async ({ input }) => {
    let {
      title,
      author,
      keySignature,
      timeSignature,
      root,
      mode,
      progression
    } = input;
    checkProgressionInsert(progression);
    let prog = JSON.stringify(progression);
    let insert = await directAccessClient(`
      INSERT INTO songs (title, author, keySignature, timeSignature, root, mode, progression)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `, [title, author, keySignature, timeSignature, root, mode, prog]);

    if (insert.insertId)
      return { success: true }
    else
      return {
        success: false,
        message: insert.message
      }
  }
}


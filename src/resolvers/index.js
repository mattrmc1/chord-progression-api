import mapProgression from '../helpers/mapProgression';
import getRelative from '../helpers/getRelative';
import directAccessClient from '../db/util/directAccessClient';

const naiveCheck = progression => {
  let parsed = JSON.parse(progression);
  if (!parsed || !parsed.length)
    return false;
  for(let i = 0; i < parsed.length; i++){
    let { chord, length } = parsed[i];
    if (!chord || !length || typeof chord !== 'string' || typeof length !== 'string' || chord === "" || length === "")
      return false;
  }
  return true;
};

export default {
  getSongById: async ({ id, key, mode }) => {
    let data = await directAccessClient(`
      SELECT * FROM songs WHERE id = ?
    `, [id]);
    data = data[0];
    data.progression = JSON.parse(data.progression);
    data['originalKey'] = data.root;
    data['originalMode'] = data.mode;
    
    if (key) {
      let target = { root: key, mode };
      let { root, signature } = getRelative(data, target);
      data.root = root;
      data.keySignature = signature;
    }
    data.progression = mapProgression(data);
    return data;
  },

  insertSong: async ({
    title,
    author,
    keySignature,
    timeSignature,
    root,
    mode,
    progression
  }) => {
    if (!naiveCheck(progression)) {
      return { success: false, message: 'Incorrect progression format'};
    };
    let insert = await directAccessClient(`
      INSERT INTO songs (title, author, keySignature, timeSignature, root, mode, progression)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `, [title, author, keySignature, timeSignature, root, mode, progression]);

    if (insert.insertId)
      return { success: true }
    else
      return {
        success: false,
        message: insert.message
      }
  }
}


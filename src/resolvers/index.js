import { chordType, getScale, getKeySignature, modes } from '../helpers/shared';
import directAccessClient from '../db/util/directAccessClient';

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
      data.root = key;
      data.mode = mode && modes[mode.toLowerCase()] ? mode.toLowerCase() : data.mode;
      let { anchor, signature } = getKeySignature(data);
      data.keySignature = signature;
      data.anchor = anchor;
    }

    let scale = getScale(data);
  
    data.progression.map(p => {
      let chordElements = p.chord.split('');
      let letter = scale[parseInt(chordElements[0]) - 1];
      let quality = chordType[chordElements[1]];
      let suffix = '';
  
      if (chordElements.includes('/')){
        let target = scale[parseInt(chordElements[chordElements.indexOf('/') + 1]) - 1];
        letter = scale[(scale.indexOf(target) + parseInt(chordElements[0])) % 8];
        suffix = [...chordElements].slice(2, chordElements.indexOf('/')).join('');
      } else {
        suffix = chordElements[1] === 'h' ? '' : [...chordElements].slice(2).join('');
      }
  
      p.chord = letter + quality + suffix;
      return p
    })
    return data;
  }
}
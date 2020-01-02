import getScale from './getScale';
import { chordType } from '../util/shared';

export default ({ root, keySignature, progression }) => {
  let scale = getScale({ root, keySignature });

  return progression.map(p => {
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
};
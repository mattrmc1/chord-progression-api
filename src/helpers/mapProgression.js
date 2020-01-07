import getScale from './getScale';
import { parseChord } from '../util/shared';

export default ({ root, keySignature, progression }) => {
  let scale = getScale({ root, keySignature });

  return progression.map(p => {
    p.chord = parseChord(p.chord, scale);
    return p;
  });
};
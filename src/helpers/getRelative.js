import { notePositions } from '../util/shared';
import getKeySignature from './getKeySignature';

const modeMap = {
  lydian: 0,
  ionian: 1,
  major: 1,
  mixolydian: 2,
  dorian: 3,
  aeolian: 4,
  minor: 4,
  phrygian: 5,
  locrian: 6
};

const getBetterAlternate = options => {
  if (options[0].signature === null)
    return false;
  if (options[1].signature === null)
    return true;
  
  return parseInt(options[0].signature[1]) < parseInt(options[1].signature[1]) ? options[0] : options[1];
}

export default ({ mode }, target) => {
  let x = modeMap[target.mode] - modeMap[mode];
  let multiplier = x < 0 ? 7 : 5;
  x = Math.abs(x);
  let roots = Object.keys(notePositions).filter(key => notePositions[key] === (notePositions[target.root] + x * multiplier) % 12);
  roots = roots.map(root => {
    try {
      return getKeySignature({ root, mode });
    } catch {
      return null;
    }
  }).filter(r => r !== null);
  return roots[1] ? getBetterAlternate(roots) : roots[0];
};
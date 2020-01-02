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

export default ({ mode }, target) => {
  let x = modeMap[target.mode] - modeMap[mode];
  let multiplier = x < 0 ? 7 : 5;
  x = Math.abs(x);
  let root = Object.keys(notePositions).find(key => notePositions[key] === (notePositions[target.root] + x * multiplier) % 12);
  return getKeySignature({ root, mode });
};
import { letters, legalSignatures } from '../util/shared';

const fifths = ['F', 'C', 'G', 'D', 'A', 'E', 'B'];

export default ({ root, keySignature }) => {
  if (!root)
    throw new Error('Note name can not be null');

  root = root.substring(0,1);
  if (!letters.includes(root))
    throw new Error(`Illegal note name: ${root}`);
  if (!keySignature)
    return [...letters.slice(letters.indexOf(root)), ...letters.slice(0, letters.indexOf(root))];
  if (!legalSignatures.includes(keySignature))
    throw new Error(`Illegal key signature: ${keySignature}`);

  let accidentals = keySignature[0] === "#" ? [...fifths] : [...fifths].reverse();
  accidentals.length = parseInt(keySignature[1]);
  let notes = letters.map(l => accidentals.includes(l) ? l + keySignature[0] : l);
  return [...notes.slice(letters.indexOf(root)), ...notes.slice(0, letters.indexOf(root))]
};
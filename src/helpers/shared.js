export const chordType = {
  "-": "min",
  "j": "Maj",
  "h": "-7(b5)",
  "f": "dim",
  "d": ""
};

const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
const fifths = ['F', 'C', 'G', 'D', 'A', 'E', 'B'];
const circle = ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#']
export const modes = {
  ionian: 0,
  dorian: -2,
  phrygian: -4,
  lydian: 1,
  mixolydian: -1,
  aeolian: -3,
  locrian: -5,
  major: 0,
  minor: -3
}

export const getKeySignatureSimple = ({ root, mode = "ionian" }) => {
  if (!circle.includes(root))
    throw new Error('Bad Key');

  let index = circle.indexOf(root);
  let sign = index > 7 ? '#' : 'b';
  let signature = `${sign}${index - 7}`;
  console.log(index, sign, signature)
  return ({ root, signature });
}

export const getKeySignature = ({ root, mode, originalMode }) => {
  if (!circle.includes(root))
    throw new Error('Bad Key');
  if (root === 'C')
    return null;

  let modifier = modes[mode];
  let anchor = circle[modes[originalMode] + modes[mode] + circle.indexOf(root)];
  let index = circle.indexOf(root) + modifier;
  let sign = index > 6 ? '#' : 'b';
  let signature = `${sign}${index - 6}`;
  return ({ anchor, signature });
}


export const getScale = ({ anchor, keySignature }) => {
  anchor = anchor.substring(0,1);
  if (!keySignature || keySignature === '')
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  let accidentals = keySignature[0] === "#" ? [...fifths] : [...fifths].reverse();
  accidentals.length = parseInt(keySignature[1]);
  let notes = letters.map(l => accidentals.includes(l) ? l + keySignature[0] : l);
  return [...notes.slice(letters.indexOf(anchor)), ...notes.slice(0, letters.indexOf(anchor))]
};
export const chordType = {
  "-": "min",
  "j": "Maj",
  "h": "-7(b5)",
  "f": "dim",
  "d": ""
};

const legalSignatures = ['#1','#2','#3','#4','#5','#6','#7','b1','b2','b3','b4','b5','b6','b7'];
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
    throw new Error('Illegal note name');
  if (!Object.keys(modes).includes(mode))
    throw new Error('Illegal mode');

  let modifier = modes[mode];
  let index = circle.indexOf(root) + modifier;
  let sign = index > 7 ? '#' : 'b';
  let signature = `${sign}${Math.abs(index - 7)}`;
  if (index === 7)
    signature = null;
  return { root, signature };
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

// Refactor:
//
// getKeySignature: takes in root note & mode, returns string (enum) of keySignature
// example: ({ root = "G", mode = "major" }) => "#1"
//
// getRelative: takes in { original root/mode } and { target root/mode }, returns { relative anchor/mode/signature } to match original MODE
// example: ({ origRoot = "G", origMode = "major" }, { targetRoot = "A", targetMode = "minor" }) => { anchor: "C", mode: "major", signature: null }
// example: ({ origRoot = "F", origMode = "major" }, { targetRoot = "Bb", targetMode = "major" }) => { anchor: "Bb", mode: "major", signature: "b2" }
// example: ({ origRoot = "G", origMode = "minor" }, { targetRoot = "Eb", targetMode = "major" }) => { anchor: "C", mode: "minor", signature: "b3" }
// example: ({ origRoot = "D", origMode = "dorian" }, { targetRoot = "D", targetMode = "major" }) => { anchor: "E", mode: "dorian", signature: "#2" }
//
// [Don't make this] getParallel: takes in { original root/mode } and { target root/mode }, returns { parallel anchor/mode/signature } to match original ROOT
// Reminder: Just use getKeySignature of new key for this functionality
//
// getScale: takes in { root and keySignature }, returns array of note names with correct accidentals in proper order
// example: ({ root = "A", keySignature = "#3" }) => ["A", "B", "C#", "D", "E", "F#", "G#"]


// OLD!!
// export const getScale = ({ anchor, keySignature }) => {
//   anchor = anchor.substring(0,1);
//   if (!keySignature || keySignature === '')
//     return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

//   let accidentals = keySignature[0] === "#" ? [...fifths] : [...fifths].reverse();
//   accidentals.length = parseInt(keySignature[1]);
//   let notes = letters.map(l => accidentals.includes(l) ? l + keySignature[0] : l);
//   return [...notes.slice(letters.indexOf(anchor)), ...notes.slice(0, letters.indexOf(anchor))]
// };

export const getScale = ({ root, keySignature }) => {
  root = root.substring(0,1);
  if (!letters.includes(root))
    throw new Error('Illegal note name');
  if (!keySignature)
    return [...letters.slice(letters.indexOf(root)), ...letters.slice(0, letters.indexOf(root))];
  if (!legalSignatures.includes(keySignature))
    throw new Error('Illegal key signature (Ex: "b3" or "#5")');

  let accidentals = keySignature[0] === "#" ? [...fifths] : [...fifths].reverse();
  accidentals.length = parseInt(keySignature[1]);
  let notes = letters.map(l => accidentals.includes(l) ? l + keySignature[0] : l);
  return [...notes.slice(letters.indexOf(root)), ...notes.slice(0, letters.indexOf(root))]
};
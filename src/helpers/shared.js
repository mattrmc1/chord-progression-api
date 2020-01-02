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
const circle = ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const notes = {
  'C': 0,
  'C#': 1,
  'Db': 1,
  'D': 2,
  'D#': 3,
  'Eb': 3,
  'E': 4,
  'Fb': 4,
  'E#': 5,
  'F': 5,
  'F#': 6,
  'Gb': 6,
  'G': 7,
  'G#': 8,
  'Ab': 8,
  'A': 9,
  'A#': 10,
  'Bb': 10,
  'B': 11,
  'Cb': 11,
  'B#': 0
};
const modes = {
  locrian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 1) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 1) % 12);
    return getMajorScale(relativeMajor);
  },
  aeolian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 2) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 3) % 12);
    return getMajorScale(relativeMajor);
  },
  mixolydian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 3) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 5) % 12);
    return getMajorScale(relativeMajor);
  },
  lydian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 4) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 7) % 12);
    return getMajorScale(relativeMajor);
  },
  phrygian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 5) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 8) % 12);
    return getMajorScale(relativeMajor);
  },
  dorian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 6) % letters.length];
    let relativeMajor = Object.keys(notes).find(key => key.includes(targetLetter) && notes[key] === (notes[root] + 10) % 12);
    return getMajorScale(relativeMajor);
  },
  minor: root => modes.aeolian(root),
  major: root => getMajorScale(root),
  ionian: root => getMajorScale(root)
}

const swapEnharmonicValues = note => Object.keys(notes).find(key => notes[key] === notes[note] && key !== note);

const getMajorScale = root => {
  if (!circle.includes(root))
    throw new Error(root);
  if (root === 'C')
    return null;
  let index = circle.indexOf(root);
  let sign = index > 7 ? '#' : 'b';
  return `${sign}${Math.abs(index - 7)}`;
};

export const getKeySignature = ({ root, mode = 'ionian' }) => {
  if (!Object.keys(notes).includes(root) && !circle.includes(root))
    throw new Error(`Illegal note name: ${root}`);
  if (!Object.keys(modes).includes(mode))
    throw new Error(`Illegal mode: ${mode}`);
  
  let signature = null;
  try {
    signature = modes[mode](root);
  } catch {
    root = swapEnharmonicValues(root);
    signature = modes[mode](root);
  }
  return { root, signature };
}

export const getRelative = (original, target) => {
  let modeMap = {
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
  let x = modeMap[target.mode] - modeMap[original.mode];
  let multiplier = x < 0 ? 7 : 5;
  x = Math.abs(x);
  let anchor = Object.keys(notes).find(key => notes[key] === (notes[target.root] + x * multiplier) % 12);

  let { root, signature } = getKeySignature({ root: anchor, mode: original.mode });
  let mode = original.mode;

  return { root, mode, signature };
}

export const getScale = ({ root, keySignature }) => {
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
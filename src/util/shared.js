export const chordType = {
  "-": "min",
  "j": "Maj",
  "h": "-7(b5)",
  "f": "dim",
  "d": ""
};
export const legalSignatures = ['#1','#2','#3','#4','#5','#6','#7','b1','b2','b3','b4','b5','b6','b7'];
export const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
export const notePositions = {
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

const modesToMajorMap = {
  locrian: { l: 1, p: 1 },
  aeolian: { l: 2, p: 3 },
  mixolydian: { l: 3, p: 5 },
  lydian: { l: 4, p: 7 },
  phrygian: { l: 5, p: 8 },
  dorian: { l: 6, p: 10 },
  minor: { l: 2, p: 3 }
}

export const getRelativeMajor = (root, mode = "minor") => {
  if (!modesToMajorMap[mode])
    throw new Error(`Unable to get relative major of unrecognized mode: ${mode}`);
  let { l, p } = modesToMajorMap[mode];
  let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + l) % letters.length];
  return Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + p) % 12);
}

export const modes = {
  locrian: root => getMajorKey(getRelativeMajor(root, 'locrian')),
  aeolian: root => getMajorKey(getRelativeMajor(root, 'aeolian')),
  mixolydian: root => getMajorKey(getRelativeMajor(root, 'mixolydian')),
  lydian: root => getMajorKey(getRelativeMajor(root, 'lydian')),
  phrygian: root => getMajorKey(getRelativeMajor(root, 'phrygian')),
  dorian: root => getMajorKey(getRelativeMajor(root, 'dorian')),
  minor: root => getMajorKey(getRelativeMajor(root)),
  major: root => getMajorKey(root),
  ionian: root => getMajorKey(root)
}

export const swapEnharmonicValues = note => Object.keys(notePositions).find(key => notePositions[key] === notePositions[note] && key !== note);

export const getMajorKey = root => {
  let circle = ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  if (!circle.includes(root))
    throw new Error(`Invalid Major Root: ${root}`);
  if (root === 'C')
    return null;
  let index = circle.indexOf(root);
  let sign = index > 7 ? '#' : 'b';
  return `${sign}${Math.abs(index - 7)}`;
};

export const parseAccidentals = key => {
  let accidentalMap = {
    sharp: '#',
    flat: 'b',
    s: '#',
    f: 'b'
  };
  if (!key || key.slice(1) === '' || Object.values(accidentalMap).includes(key.slice(1)) )
    return key;

  return key[0] + accidentalMap[key.slice(1)];
}
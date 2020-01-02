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

export const modes = {
  locrian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 1) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 1) % 12);
    return getMajorScale(relativeMajor);
  },
  aeolian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 2) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 3) % 12);
    return getMajorScale(relativeMajor);
  },
  mixolydian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 3) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 5) % 12);
    return getMajorScale(relativeMajor);
  },
  lydian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 4) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 7) % 12);
    return getMajorScale(relativeMajor);
  },
  phrygian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 5) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 8) % 12);
    return getMajorScale(relativeMajor);
  },
  dorian: root => {
    let targetLetter = letters[(letters.indexOf(root.substring(0,1)) + 6) % letters.length];
    let relativeMajor = Object.keys(notePositions).find(key => key.includes(targetLetter) && notePositions[key] === (notePositions[root] + 10) % 12);
    return getMajorScale(relativeMajor);
  },
  minor: root => modes.aeolian(root),
  major: root => getMajorScale(root),
  ionian: root => getMajorScale(root)
}

export const swapEnharmonicValues = note => Object.keys(notePositions).find(key => notePositions[key] === notePositions[note] && key !== note);

export const getMajorScale = root => {
  let circle = ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  if (!circle.includes(root))
    throw new Error(root);
  if (root === 'C')
    return null;
  let index = circle.indexOf(root);
  let sign = index > 7 ? '#' : 'b';
  return `${sign}${Math.abs(index - 7)}`;
};
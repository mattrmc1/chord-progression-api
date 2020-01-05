export const majorKeys = [
  {
    input: 'Cb',
    output: 'b7'
  },
  {
    input: 'Gb',
    output: 'b6'
  },
  {
    input: 'Db',
    output: 'b5'
  },
  {
    input: 'Ab',
    output: 'b4'
  },
  {
    input: 'Eb',
    output: 'b3'
  },
  {
    input: 'Bb',
    output: 'b2'
  },
  {
    input: 'F',
    output: 'b1'
  },
  {
    input: 'C',
    output: null
  },
  {
    input: 'G',
    output: '#1'
  },
  {
    input: 'D',
    output: '#2'
  },
  {
    input: 'A',
    output: '#3'
  },
  {
    input: 'E',
    output: '#4'
  },
  {
    input: 'B',
    output: '#5'
  },
  {
    input: 'F#',
    output: '#6'
  },
  {
    input: 'C#',
    output: '#7'
  },
];

export const relativeMajors = [
  {
    input: ['C', 'minor'],
    output: 'Eb'
  },
  {
    input: ['C'],
    output: 'Eb'
  },
  {
    input: ['F#', 'minor'],
    output: 'A'
  },
  {
    input: ['Gb', 'minor'],
    output: undefined
  },
  {
    input: ['C', 'dorian'],
    output: 'Bb'
  },
  {
    input: ['F#', 'phrygian'],
    output: 'D'
  }
];

export const modesUnit = [
  {
    input: 'C',
    output: {
      locrian: 'b5',
      aeolian: 'b3',
      mixolydian: 'b1',
      lydian: '#1',
      phrygian: 'b4',
      dorian: 'b2',
      minor: 'b3',
      major: null,
      ionian: null
    }
  },
  {
    input: 'F#',
    output: {
      locrian: '#1',
      aeolian: '#3',
      mixolydian: '#5',
      lydian: '#7',
      phrygian: '#2',
      dorian: '#4',
      minor: '#3',
      major: '#6',
      ionian: '#6'
    }
  },
  {
    input: 'Gb',
    output: {
      locrian: 'INVALID',
      aeolian: 'INVALID',
      mixolydian: 'b7',
      lydian: 'b5',
      phrygian: 'INVALID',
      dorian: 'INVALID',
      minor: 'INVALID',
      major: 'b6',
      ionian: 'b6'
    }
  }
];

export const enharmonicUnit = [
  {
    description: 'Swap B# <-> C',
    keys: ['C', 'B#']
  },
  {
    description: 'Swap C# <-> Db',
    keys: ['Db', 'C#']
  },
  {
    description: 'Swap D# <-> Eb',
    keys: ['Eb', 'D#']
  },
  {
    description: 'Swap E <-> Fb',
    keys: ['Fb', 'E']
  },
  {
    description: 'Swap E# <-> F',
    keys: ['F', 'E#']
  },
  {
    description: 'Swap F# <-> Gb',
    keys: ['Gb', 'F#']
  },
  {
    description: 'Swap G# <-> Ab',
    keys: ['Ab', 'G#']
  },
  {
    description: 'Swap A# <-> Bb',
    keys: ['Bb', 'A#']
  },
  {
    description: 'Swap B <-> Cb',
    keys: ['Cb', 'B']
  },
]
export const scalesTest = [
  // E (all modes)
  {
    description: 'E Lydian',
    input: { root: 'E', keySignature: '#5' },
    output: ['E', 'F#', 'G#', 'A#', 'B', 'C#', 'D#']
  },
  {
    description: 'E Major',
    input: { root: 'E', keySignature: '#4' },
    output: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']
  },
  {
    description: 'E Mixo',
    input: { root: 'E', keySignature: '#3' },
    output: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D']
  },
  {
    description: 'E Dorian',
    input: { root: 'E', keySignature: '#2' },
    output: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D']
  },
  {
    description: 'E Minor',
    input: { root: 'E', keySignature: '#1' },
    output: ['E', 'F#', 'G', 'A', 'B', 'C', 'D']
  },
  {
    description: 'E Phrygian',
    input: { root: 'E', keySignature: null },
    output: ['E', 'F', 'G', 'A', 'B', 'C', 'D']
  },
  {
    description: 'E Locrian',
    input: { root: 'E', keySignature: 'b1' },
    output: ['E', 'F', 'G', 'A', 'Bb', 'C', 'D']
  },
  // F (all modes)
  {
    description: 'F Lydian',
    input: { root: 'F', keySignature: null },
    output: ['F', 'G', 'A', 'B', 'C', 'D', 'E']
  },
  {
    description: 'F Major',
    input: { root: 'F', keySignature: 'b1' },
    output: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E']
  },
  {
    description: 'F Mixolydian',
    input: { root: 'F', keySignature: 'b2' },
    output: ['F', 'G', 'A', 'Bb', 'C', 'D', 'Eb']
  },
  {
    description: 'F Dorian',
    input: { root: 'F', keySignature: 'b3' },
    output: ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'Eb']
  },
  {
    description: 'F Minor',
    input: { root: 'F', keySignature: 'b4' },
    output: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb']
  },
  {
    description: 'F Phrygian',
    input: { root: 'F', keySignature: 'b5' },
    output: ['F', 'Gb', 'Ab', 'Bb', 'C', 'Db', 'Eb']
  },
  {
    description: 'F Locrian',
    input: { root: 'F', keySignature: 'b6' },
    output: ['F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb']
  },
  // F# (all modes)
  {
    description: 'F# Lydian',
    input: { root: 'F#', keySignature: '#7' },
    output: ['F#', 'G#', 'A#', 'B#', 'C#', 'D#', 'E#']
  },
  {
    description: 'F# Major',
    input: { root: 'F#', keySignature: '#6' },
    output: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#']
  },
  {
    description: 'F# Mixolydian',
    input: { root: 'F#', keySignature: '#5' },
    output: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E']
  },
  {
    description: 'F# Dorian',
    input: { root: 'F#', keySignature: '#4' },
    output: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'E']
  },
  {
    description: 'F# Minor',
    input: { root: 'F#', keySignature: '#3' },
    output: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E']
  },
  {
    description: 'F# Phrygian',
    input: { root: 'F#', keySignature: '#2' },
    output: ['F#', 'G', 'A', 'B', 'C#', 'D', 'E']
  },
  {
    description: 'F# Locrian',
    input: { root: 'F#', keySignature: '#1' },
    output: ['F#', 'G', 'A', 'B', 'C', 'D', 'E']
  },
  // Gb (mixo and up)
  {
    description: 'Gb Lydian',
    input: { root: 'Gb', keySignature: 'b5' },
    output: ['Gb', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']
  },
  {
    description: 'Gb Major',
    input: { root: 'Gb', keySignature: 'b6' },
    output: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F']
  },
  {
    description: 'Gb Mixolydian',
    input: { root: 'Gb', keySignature: 'b7' },
    output: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb']
  },
  // G (all modes)
  {
    description: 'G Lydian',
    input: { root: 'G', keySignature: '#2' },
    output: ['G', 'A', 'B', 'C#', 'D', 'E', 'F#']
  },
  {
    description: 'G Major',
    input: { root: 'G', keySignature: '#1' },
    output: ['G', 'A', 'B', 'C', 'D', 'E', 'F#']
  },
  {
    description: 'G Mixolydian',
    input: { root: 'G', keySignature: null },
    output: ['G', 'A', 'B', 'C', 'D', 'E', 'F']
  },
  {
    description: 'G Dorian',
    input: { root: 'G', keySignature: 'b1' },
    output: ['G', 'A', 'Bb', 'C', 'D', 'E', 'F']
  },
  {
    description: 'G Minor',
    input: { root: 'G', keySignature: 'b2' },
    output: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F']
  },
  {
    description: 'G Phrygian',
    input: { root: 'G', keySignature: 'b3' },
    output: ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F']
  },
  {
    description: 'G Locrian',
    input: { root: 'G', keySignature: 'b4' },
    output: ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']
  },
  // G# (mixo and down)
  { 
    description: 'G# Mixolydian',
    input: { root: 'G#', keySignature: '#7' },
    output: ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'F#']
  },
  { 
    description: 'G# Dorian',
    input: { root: 'G#', keySignature: '#6' },
    output: ['G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#']
  },
  { 
    description: 'G# Minor',
    input: { root: 'G#', keySignature: '#5' },
    output: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#']
  },
  { 
    description: 'G# Phrygian',
    input: { root: 'G#', keySignature: '#4' },
    output: ['G#', 'A', 'B', 'C#', 'D#', 'E', 'F#']
  },
  { 
    description: 'G# Locrian',
    input: { root: 'G#', keySignature: '#3' },
    output: ['G#', 'A', 'B', 'C#', 'D', 'E', 'F#']
  },
  // Ab (Minor and up)
  {
    description: 'Ab Lydian',
    input: { root: 'Ab', keySignature: 'b3' },
    output: ['Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
  },
  {
    description: 'Ab Major',
    input: { root: 'Ab', keySignature: 'b4' },
    output: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']
  },
  {
    description: 'Ab Mixolydian',
    input: { root: 'Ab', keySignature: 'b5' },
    output: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'Gb']
  },
  {
    description: 'Ab Dorian',
    input: { root: 'Ab', keySignature: 'b6' },
    output: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb']
  },
  {
    description: 'Ab Minor',
    input: { root: 'Ab', keySignature: 'b7' },
    output: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb']
  },
  // A (all modes)
  {
    description: 'A Locrian',
    input: { root: 'A', keySignature: 'b2' },
    output: ['A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
  },
  {
    description: 'A Phrygian',
    input: { root: 'A', keySignature: 'b1' },
    output: ['A', 'Bb', 'C', 'D', 'E', 'F', 'G']
  },
  {
    description: 'A Minor',
    input: { root: 'A', keySignature: null },
    output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  },
  {
    description: 'A Dorian',
    input: { root: 'A', keySignature: '#1' },
    output: ['A', 'B', 'C', 'D', 'E', 'F#', 'G']
  },
  {
    description: 'A Mixolydian',
    input: { root: 'A', keySignature: '#2' },
    output: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G']
  },
  {
    description: 'A Major',
    input: { root: 'A', keySignature: '#3' },
    output: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
  },
  {
    description: 'A Lydian',
    input: { root: 'A', keySignature: '#4' },
    output: ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#']
  },
  // A# (minor and down)
  {
    description: 'A# Locrian',
    input: { root: 'A#', keySignature: '#5' },
    output: ['A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#']
  },
  {
    description: 'A# Phrygian',
    input: { root: 'A#', keySignature: '#6' },
    output: ['A#', 'B', 'C#', 'D#', 'E#', 'F#', 'G#']
  },
  {
    description: 'A# Minor',
    input: { root: 'A#', keySignature: '#7' },
    output: ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#']
  },
  // Bb (all modes)
  {
    description: 'Bb Lydian',
    input: { root: 'Bb', keySignature: 'b1' },
    output: ['Bb', 'C', 'D', 'E', 'F', 'G', 'A']
  },
  {
    description: 'Bb Major',
    input: { root: 'Bb', keySignature: 'b2' },
    output: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
  },
  {
    description: 'Bb Mixolydian',
    input: { root: 'Bb', keySignature: 'b3' },
    output: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'Ab']
  },
  {
    description: 'Bb Dorian',
    input: { root: 'Bb', keySignature: 'b4' },
    output: ['Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab']
  },
  {
    description: 'Bb Minor',
    input: { root: 'Bb', keySignature: 'b5' },
    output: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab']
  },
  {
    description: 'Bb Phrygian',
    input: { root: 'Bb', keySignature: 'b6' },
    output: ['Bb', 'Cb', 'Db', 'Eb', 'F', 'Gb', 'Ab']
  },
  {
    description: 'Bb Locrian',
    input: { root: 'Bb', keySignature: 'b7' },
    output: ['Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab']
  },
  // B (all modes)
  {
    description: 'B Locrian',
    input: { root: 'B', keySignature: null },
    output: ['B', 'C', 'D', 'E', 'F', 'G', 'A']
  },
  {
    description: 'B Phrygian',
    input: { root: 'B', keySignature: '#1' },
    output: ['B', 'C', 'D', 'E', 'F#', 'G', 'A']
  },
  {
    description: 'B Minor',
    input: { root: 'B', keySignature: '#2' },
    output: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
  },
  {
    description: 'B Dorian',
    input: { root: 'B', keySignature: '#3' },
    output: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A']
  },
  {
    description: 'B Mixolydian',
    input: { root: 'B', keySignature: '#4' },
    output: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A']
  },
  {
    description: 'B Major',
    input: { root: 'B', keySignature: '#5' },
    output: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
  },
  {
    description: 'B Lydian',
    input: { root: 'B', keySignature: '#6' },
    output: ['B', 'C#', 'D#', 'E#', 'F#', 'G#', 'A#']
  },
  // C (all modes)
  {
    description: 'C Lydian',
    input: { root: 'C', keySignature: '#1' },
    output: ['C', 'D', 'E', 'F#', 'G', 'A', 'B']
  },
  {
    description: 'C Major',
    input: { root: 'C', keySignature: null },
    output: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  },
  {
    description: 'C Mixo',
    input: { root: 'C', keySignature: 'b1' },
    output: ['C', 'D', 'E', 'F', 'G', 'A', 'Bb']
  },
  {
    description: 'C Dorian',
    input: { root: 'C', keySignature: 'b2' },
    output: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']
  },
  {
    description: 'C Minor',
    input: { root: 'C', keySignature: 'b3' },
    output: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
  },
  {
    description: 'C Phrygian',
    input: { root: 'C', keySignature: 'b4' },
    output: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb']
  },
  {
    description: 'C Locrian',
    input: { root: 'C', keySignature: 'b5' },
    output: ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb']
  },
  // C# (major and down)
  {
    description: 'C# Major',
    input: { root: 'C#', keySignature: '#7' },
    output: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
  },
  {
    description: 'C# Mixo',
    input: { root: 'C#', keySignature: '#6' },
    output: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B']
  },
  {
    description: 'C# Dorian',
    input: { root: 'C#', keySignature: '#5' },
    output: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B']
  },
  {
    description: 'C# Minor',
    input: { root: 'C#', keySignature: '#4' },
    output: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']
  },
  {
    description: 'C# Phrygian',
    input: { root: 'C#', keySignature: '#3' },
    output: ['C#', 'D', 'E', 'F#', 'G#', 'A', 'B']
  },
  {
    description: 'C# Locrian',
    input: { root: 'C#', keySignature: '#2' },
    output: ['C#', 'D', 'E', 'F#', 'G', 'A', 'B']
  },
  // Db (dorian and up)
  {
    description: 'Db Lydian',
    input: { root: 'Db', keySignature: 'b4' },
    output: ['Db', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']
  },
  {
    description: 'Db Major',
    input: { root: 'Db', keySignature: 'b5' },
    output: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']
  },
  {
    description: 'Db Mixo',
    input: { root: 'Db', keySignature: 'b6' },
    output: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb']
  },
  {
    description: 'Db Dorian',
    input: { root: 'Db', keySignature: 'b7' },
    output: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb']
  },
  // D (all modes)
  {
    description: 'D Lydian',
    input: { root: 'D', keySignature: '#3' },
    output: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#']
  },
  {
    description: 'D Major',
    input: { root: 'D', keySignature: '#2' },
    output: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']
  },
  {
    description: 'D Mixo',
    input: { root: 'D', keySignature: '#1' },
    output: ['D', 'E', 'F#', 'G', 'A', 'B', 'C']
  },
  {
    description: 'D Dorian',
    input: { root: 'D', keySignature: null },
    output: ['D', 'E', 'F', 'G', 'A', 'B', 'C']
  },
  {
    description: 'D Minor',
    input: { root: 'D', keySignature: 'b1' },
    output: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C']
  },
  {
    description: 'D Phrygian',
    input: { root: 'D', keySignature: 'b2' },
    output: ['D', 'Eb', 'F', 'G', 'A', 'Bb', 'C']
  },
  {
    description: 'D Locrian',
    input: { root: 'D', keySignature: 'b3' },
    output: ['D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']
  },
  // D# (minor and down)
  {
    description: 'D# Dorian',
    input: { root: 'D#', keySignature: '#7' },
    output: ['D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#']
  },
  {
    description: 'D# Minor',
    input: { root: 'D#', keySignature: '#6' },
    output: ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#']
  },
  {
    description: 'D# Phrygian',
    input: { root: 'D#', keySignature: '#5' },
    output: ['D#', 'E', 'F#', 'G#', 'A#', 'B', 'C#']
  },
  {
    description: 'D# Locrian',
    input: { root: 'D#', keySignature: '#4' },
    output: ['D#', 'E', 'F#', 'G#', 'A', 'B', 'C#']
  },
  // Eb (phrygian and up)
  {
    description: 'Eb Lydian',
    input: { root: 'Eb', keySignature: 'b2' },
    output: ['Eb', 'F', 'G', 'A', 'Bb', 'C', 'D']
  },
  {
    description: 'Eb Major',
    input: { root: 'Eb', keySignature: 'b3' },
    output: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
  },
  {
    description: 'Eb Mixo',
    input: { root: 'Eb', keySignature: 'b4' },
    output: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db']
  },
  {
    description: 'Eb Dorian',
    input: { root: 'Eb', keySignature: 'b5' },
    output: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'Db']
  },
  {
    description: 'Eb Minor',
    input: { root: 'Eb', keySignature: 'b6' },
    output: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db']
  },
  {
    description: 'Eb Phrygian',
    input: { root: 'Eb', keySignature: 'b7' },
    output: ['Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb', 'Db']
  }
];
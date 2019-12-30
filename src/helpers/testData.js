export const majorKeysTest = [
  { description: 'Cb Major',
    input: { root: 'Cb' },
    output: { root: 'Cb', signature: 'b7'} 
  },
  { description: 'Cb Major',
    input: { root: 'Cb', mode: 'major' },
    output: { root: 'Cb', signature: 'b7'} 
  },
  { description: 'Cb Major',
    input: { root: 'Cb', mode: 'ionian' },
    output: { root: 'Cb', signature: 'b7'} 
  },
  { description: 'Gb Major',
    input: { root: 'Gb' },
    output: { root: 'Gb', signature: 'b6' } 
  },
  { description: 'Gb Major',
    input: { root: 'Gb', mode: 'major' },
    output: { root: 'Gb', signature: 'b6' } 
  },
  { description: 'Gb Major',
    input: { root: 'Gb', mode: 'ionian' },
    output: { root: 'Gb', signature: 'b6' } 
  },
  { description: 'Db Major',
    input: { root: 'Db' },
    output: { root: 'Db', signature: 'b5' } 
  },
  { description: 'Db Major',
    input: { root: 'Db', mode: 'major' },
    output: { root: 'Db', signature: 'b5' } 
  },
  { description: 'Db Major',
    input: { root: 'Db', mode: 'ionian' },
    output: { root: 'Db', signature: 'b5' } 
  },
  { description: 'Ab Major',
    input: { root: 'Ab' },
    output: { root: 'Ab', signature: 'b4' } 
  },
  { description: 'Ab Major',
    input: { root: 'Ab', mode: 'major' },
    output: { root: 'Ab', signature: 'b4' } 
  },
  { description: 'Ab Major',
    input: { root: 'Ab', mode: 'ionian' },
    output: { root: 'Ab', signature: 'b4' } 
  },
  { description: 'Eb Major',
    input: { root: 'Eb' },
    output: { root: 'Eb', signature: 'b3' } 
  },
  { description: 'Eb Major',
    input: { root: 'Eb', mode: 'major' },
    output: { root: 'Eb', signature: 'b3' } 
  },
  { description: 'Eb Major',
    input: { root: 'Eb', mode: 'ionian' },
    output: { root: 'Eb', signature: 'b3' } 
  },
  { description: 'Bb Major',
    input: { root: 'Bb' },
    output: { root: 'Bb', signature: 'b2' } 
  },
  { description: 'Bb Major',
    input: { root: 'Bb', mode: 'major' },
    output: { root: 'Bb', signature: 'b2' } 
  },
  { description: 'Bb Major',
    input: { root: 'Bb', mode: 'ionian' },
    output: { root: 'Bb', signature: 'b2' } 
  },
  { description: 'F Major',
    input: { root: 'F' },
    output: { root: 'F' , signature: 'b1'} 
  },
  { description: 'F Major',
    input: { root: 'F', mode: 'major' },
    output: { root: 'F' , signature: 'b1'} 
  },
  { description: 'F Major',
    input: { root: 'F', mode: 'ionian' },
    output: { root: 'F' , signature: 'b1'} 
  },
  { description: 'C Major',
    input: { root: 'C' },
    output: { root: 'C', signature: null } 
  },
  { description: 'C Major',
    input: { root: 'C', mode: 'major' },
    output: { root: 'C', signature: null } 
  },
  { description: 'C Major',
    input: { root: 'C', mode: 'ionian' },
    output: { root: 'C', signature: null } 
  },
  { description: 'G Major',
    input: { root: 'G' },
    output: { root: 'G', signature: '#1' } 
  },
  { description: 'G Major',
    input: { root: 'G', mode: 'major' },
    output: { root: 'G', signature: '#1' } 
  },
  { description: 'G Major',
    input: { root: 'G', mode: 'ionian' },
    output: { root: 'G', signature: '#1' } 
  },
  { description: 'D Major',
    input: { root: 'D' },
    output: { root: 'D', signature: '#2' } 
  },
  { description: 'D Major',
    input: { root: 'D', mode: 'major' },
    output: { root: 'D', signature: '#2' } 
  },
  { description: 'D Major',
    input: { root: 'D', mode: 'ionian' },
    output: { root: 'D', signature: '#2' } 
  },
  { description: 'A Major',
    input: { root: 'A' },
    output: { root: 'A', signature: '#3' } 
  },
  { description: 'A Major',
    input: { root: 'A', mode: 'major' },
    output: { root: 'A', signature: '#3' } 
  },
  { description: 'A Major',
    input: { root: 'A', mode: 'ionian' },
    output: { root: 'A', signature: '#3' } 
  },
  { description: 'E Major',
    input: { root: 'E' },
    output: { root: 'E', signature: '#4' } 
  },
  { description: 'E Major',
    input: { root: 'E', mode: 'major' },
    output: { root: 'E', signature: '#4' } 
  },
  { description: 'E Major',
    input: { root: 'E', mode: 'ionian' },
    output: { root: 'E', signature: '#4' } 
  },
  { description: 'B Major',
    input: { root: 'B' },
    output: { root: 'B', signature: '#5' } 
  },
  { description: 'B Major',
    input: { root: 'B', mode: 'major' },
    output: { root: 'B', signature: '#5' } 
  },
  { description: 'B Major',
    input: { root: 'B', mode: 'ionian' },
    output: { root: 'B', signature: '#5' } 
  },
  { description: 'F# Major',
    input: { root: 'F#' },
    output: { root: 'F#', signature: '#6' } 
  },
  { description: 'F# Major',
    input: { root: 'F#', mode: 'major' },
    output: { root: 'F#', signature: '#6' } 
  },
  { description: 'F# Major',
    input: { root: 'F#', mode: 'ionian' },
    output: { root: 'F#', signature: '#6' } 
  },
  { description: 'C# Major',
    input: { root: 'C#' },
    output: { root: 'C#', signature: '#7' }
  },
  { description: 'C# Major',
    input: { root: 'C#', mode: 'major' },
    output: { root: 'C#', signature: '#7' }
  },
  { description: 'C# Major',
    input: { root: 'C#', mode: 'ionian' },
    output: { root: 'C#', signature: '#7' }
  }
];

export const minorKeysTest = [
  { description: 'Ab Minor',
    input: { root: 'Ab', mode: 'minor' },
    output: { root: 'Ab', signature: 'b7' } 
  },
  { description: 'Ab Minor',
    input: { root: 'Ab', mode: 'aeolian' },
    output: { root: 'Ab', signature: 'b7' } 
  },
  { description: 'Eb Minor',
    input: { root: 'Eb', mode: 'minor' },
    output: { root: 'Eb', signature: 'b6' } 
  },
  { description: 'Eb Minor',
    input: { root: 'Eb', mode: 'aeolian' },
    output: { root: 'Eb', signature: 'b6' } 
  },
  { description: 'Bb Minor',
    input: { root: 'Bb', mode: 'minor' },
    output: { root: 'Bb', signature: 'b5' } 
  },
  { description: 'Bb Minor',
    input: { root: 'Bb', mode: 'aeolian' },
    output: { root: 'Bb', signature: 'b5' } 
  },
  { description: 'F Minor',
    input: { root: 'F', mode: 'minor' },
    output: { root: 'F' , signature: 'b4'} 
  },
  { description: 'F Minor',
    input: { root: 'F', mode: 'aeolian' },
    output: { root: 'F' , signature: 'b4'} 
  },
  { description: 'C Minor',
    input: { root: 'C', mode: 'minor' },
    output: { root: 'C', signature: 'b3' } 
  },
  { description: 'C Minor',
    input: { root: 'C', mode: 'aeolian' },
    output: { root: 'C', signature: 'b3' } 
  },
  { description: 'G Minor',
    input: { root: 'G', mode: 'minor' },
    output: { root: 'G', signature: 'b2' } 
  },
  { description: 'G Minor',
    input: { root: 'G', mode: 'aeolian' },
    output: { root: 'G', signature: 'b2' } 
  },
  { description: 'D Minor',
    input: { root: 'D', mode: 'minor' },
    output: { root: 'D', signature: 'b1' } 
  },
  { description: 'D Minor',
    input: { root: 'D', mode: 'aeolian' },
    output: { root: 'D', signature: 'b1' } 
  },
  { description: 'A Minor',
    input: { root: 'A', mode: 'minor' },
    output: { root: 'A', signature: null } 
  },
  { description: 'A Minor',
    input: { root: 'A', mode: 'aeolian' },
    output: { root: 'A', signature: null } 
  },
  { description: 'E Minor',
    input: { root: 'E', mode: 'minor' },
    output: { root: 'E', signature: '#1' } 
  },
  { description: 'E Minor',
    input: { root: 'E', mode: 'aeolian' },
    output: { root: 'E', signature: '#1' } 
  },
  { description: 'B Minor',
    input: { root: 'B', mode: 'minor' },
    output: { root: 'B', signature: '#2' } 
  },
  { description: 'B Minor',
    input: { root: 'B', mode: 'aeolian' },
    output: { root: 'B', signature: '#2' } 
  },
  { description: 'F# Minor',
    input: { root: 'F#', mode: 'minor' },
    output: { root: 'F#', signature: '#3' } 
  },
  { description: 'F# Minor',
    input: { root: 'F#', mode: 'aeolian' },
    output: { root: 'F#', signature: '#3' } 
  },
  { description: 'C# Minor',
    input: { root: 'C#', mode: 'minor' },
    output: { root: 'C#', signature: '#4' }
  },
  { description: 'C# Minor',
    input: { root: 'C#', mode: 'aeolian' },
    output: { root: 'C#', signature: '#4' }
  },
  { description: 'G# Minor',
    input: { root: 'G#', mode: 'minor' },
    output: { root: 'G#', signature: '#5' }
  },
  { description: 'G# Minor',
    input: { root: 'G#', mode: 'aeolian' },
    output: { root: 'G#', signature: '#5' }
  },
  { description: 'D# Minor',
    input: { root: 'D#', mode: 'minor' },
    output: { root: 'D#', signature: '#6' }
  },
  { description: 'D# Minor',
    input: { root: 'D#', mode: 'aeolian' },
    output: { root: 'D#', signature: '#6' }
  },
  { description: 'A# Minor',
    input: { root: 'A#', mode: 'minor' },
    output: { root: 'A#', signature: '#7' }
  },
  { description: 'A# Minor',
    input: { root: 'A#', mode: 'aeolian' },
    output: { root: 'A#', signature: '#7' }
  }
];

export const dorianModesTest = [
  { description: 'Db Dorian',
    input: { root: 'Db', mode: 'dorian' },
    output: { root: 'Db', signature: 'b7' } 
  },
  { description: 'Ab Dorian',
    input: { root: 'Ab', mode: 'dorian' },
    output: { root: 'Ab', signature: 'b6' } 
  },
  { description: 'Eb Dorian',
    input: { root: 'Eb', mode: 'dorian' },
    output: { root: 'Eb', signature: 'b5' } 
  },
  { description: 'Bb Dorian',
    input: { root: 'Bb', mode: 'dorian' },
    output: { root: 'Bb' , signature: 'b4'} 
  },
  { description: 'F Dorian',
    input: { root: 'F', mode: 'dorian' },
    output: { root: 'F', signature: 'b3' } 
  },
  { description: 'C Dorian',
    input: { root: 'C', mode: 'dorian' },
    output: { root: 'C', signature: 'b2' } 
  },
  { description: 'G Dorian',
    input: { root: 'G', mode: 'dorian' },
    output: { root: 'G', signature: 'b1' } 
  },
  { description: 'D Dorian',
    input: { root: 'D', mode: 'dorian' },
    output: { root: 'D', signature: null } 
  },
  { description: 'A Dorian',
    input: { root: 'A', mode: 'dorian' },
    output: { root: 'A', signature: '#1' } 
  },
  { description: 'E Dorian',
    input: { root: 'E', mode: 'dorian' },
    output: { root: 'E', signature: '#2' } 
  },
  { description: 'B Dorian',
    input: { root: 'B', mode: 'dorian' },
    output: { root: 'B', signature: '#3' } 
  },
  { description: 'F# Dorian',
    input: { root: 'F#', mode: 'dorian' },
    output: { root: 'F#', signature: '#4' }
  },
  { description: 'C# Dorian',
    input: { root: 'C#', mode: 'dorian' },
    output: { root: 'C#', signature: '#5' }
  },
  { description: 'G# Dorian',
    input: { root: 'G#', mode: 'dorian' },
    output: { root: 'G#', signature: '#6' }
  },
  { description: 'D# Dorian',
    input: { root: 'D#', mode: 'dorian' },
    output: { root: 'D#', signature: '#7' }
  }
];

export const phrygianModesTest = [
  { description: 'Eb Phrygian',
    input: { root: 'Eb', mode: 'phrygian' },
    output: { root: 'Eb', signature: 'b7' } 
  },
  { description: 'Bb Phrygian',
    input: { root: 'Bb', mode: 'phrygian' },
    output: { root: 'Bb', signature: 'b6' } 
  },
  { description: 'F Phrygian',
    input: { root: 'F', mode: 'phrygian' },
    output: { root: 'F', signature: 'b5' } 
  },
  { description: 'C Phrygian',
    input: { root: 'C', mode: 'phrygian' },
    output: { root: 'C' , signature: 'b4'} 
  },
  { description: 'G Phrygian',
    input: { root: 'G', mode: 'phrygian' },
    output: { root: 'G', signature: 'b3' } 
  },
  { description: 'D Phrygian',
    input: { root: 'D', mode: 'phrygian' },
    output: { root: 'D', signature: 'b2' } 
  },
  { description: 'A Phrygian',
    input: { root: 'A', mode: 'phrygian' },
    output: { root: 'A', signature: 'b1' } 
  },
  { description: 'E Phrygian',
    input: { root: 'E', mode: 'phrygian' },
    output: { root: 'E', signature: null } 
  },
  { description: 'B Phrygian',
    input: { root: 'B', mode: 'phrygian' },
    output: { root: 'B', signature: '#1' } 
  },
  { description: 'F# Phrygian',
    input: { root: 'F#', mode: 'phrygian' },
    output: { root: 'F#', signature: '#2' } 
  },
  { description: 'C# Phrygian',
    input: { root: 'C#', mode: 'phrygian' },
    output: { root: 'C#', signature: '#3' } 
  },
  { description: 'G# Phrygian',
    input: { root: 'G#', mode: 'phrygian' },
    output: { root: 'G#', signature: '#4' }
  },
  { description: 'D# Phrygian',
    input: { root: 'D#', mode: 'phrygian' },
    output: { root: 'D#', signature: '#5' }
  },
  { description: 'A# Phrygian',
    input: { root: 'A#', mode: 'phrygian' },
    output: { root: 'A#', signature: '#6' }
  },
  { description: 'E# Phrygian',
    input: { root: 'E#', mode: 'phrygian' },
    output: { root: 'E#', signature: '#7' }
  }
];

export const lydianModesTest = [
  { description: 'Fb Lydian',
    input: { root: 'Fb', mode: 'dorian' },
    output: { root: 'Fb', signature: 'b7' } 
  },
  { description: 'Cb Lydian',
    input: { root: 'Cb', mode: 'lydian' },
    output: { root: 'Cb', signature: 'b6' } 
  },
  { description: 'Gb Lydian',
    input: { root: 'Gb', mode: 'lydian' },
    output: { root: 'Gb', signature: 'b5' } 
  },
  { description: 'Db Lydian',
    input: { root: 'Db', mode: 'lydian' },
    output: { root: 'Db' , signature: 'b4'} 
  },
  { description: 'Ab Lydian',
    input: { root: 'Ab', mode: 'lydian' },
    output: { root: 'Ab', signature: 'b3' } 
  },
  { description: 'Eb Lydian',
    input: { root: 'Eb', mode: 'lydian' },
    output: { root: 'Eb', signature: 'b2' } 
  },
  { description: 'Bb Lydian',
    input: { root: 'Bb', mode: 'lydian' },
    output: { root: 'Bb', signature: 'b1' } 
  },
  { description: 'F Lydian',
    input: { root: 'F', mode: 'lydian' },
    output: { root: 'F', signature: null } 
  },
  { description: 'C Lydian',
    input: { root: 'C', mode: 'lydian' },
    output: { root: 'C', signature: '#1' } 
  },
  { description: 'G Lydian',
    input: { root: 'G', mode: 'lydian' },
    output: { root: 'G', signature: '#2' } 
  },
  { description: 'D Lydian',
    input: { root: 'D', mode: 'lydian' },
    output: { root: 'D', signature: '#3' } 
  },
  { description: 'A Lydian',
    input: { root: 'A', mode: 'lydian' },
    output: { root: 'A', signature: '#4' }
  },
  { description: 'E Lydian',
    input: { root: 'E', mode: 'lydian' },
    output: { root: 'E', signature: '#5' }
  },
  { description: 'B Lydian',
    input: { root: 'B', mode: 'lydian' },
    output: { root: 'B', signature: '#6' }
  },
  { description: 'F# Lydian',
    input: { root: 'F#', mode: 'lydian' },
    output: { root: 'F#', signature: '#7' }
  }
];

export const mixolydianModesTest = [
  { description: 'Gb Mixolydian',
    input: { root: 'Gb', mode: 'dorian' },
    output: { root: 'Gb', signature: 'b7' } 
  },
  { description: 'Db Mixolydian',
    input: { root: 'Db', mode: 'dorian' },
    output: { root: 'Db', signature: 'b6' } 
  },
  { description: 'Ab Mixolydian',
    input: { root: 'Ab', mode: 'mixolydian' },
    output: { root: 'Ab', signature: 'b5' } 
  },
  { description: 'Eb Mixolydian',
    input: { root: 'Eb', mode: 'mixolydian' },
    output: { root: 'Eb' , signature: 'b4'} 
  },
  { description: 'Bb Mixolydian',
    input: { root: 'Bb', mode: 'mixolydian' },
    output: { root: 'Bb', signature: 'b3' } 
  },
  { description: 'F Mixolydian',
    input: { root: 'F', mode: 'mixolydian' },
    output: { root: 'F', signature: 'b2' } 
  },
  { description: 'C Mixolydian',
    input: { root: 'C', mode: 'mixolydian' },
    output: { root: 'C', signature: 'b1' } 
  },
  { description: 'G Mixolydian',
    input: { root: 'G', mode: 'mixolydian' },
    output: { root: 'G', signature: null } 
  },
  { description: 'D Mixolydian',
    input: { root: 'D', mode: 'mixolydian' },
    output: { root: 'D', signature: '#1' } 
  },
  { description: 'A Mixolydian',
    input: { root: 'A', mode: 'mixolydian' },
    output: { root: 'A', signature: '#2' } 
  },
  { description: 'E Mixolydian',
    input: { root: 'E', mode: 'mixolydian' },
    output: { root: 'E', signature: '#3' } 
  },
  { description: 'B Mixolydian',
    input: { root: 'B', mode: 'mixolydian' },
    output: { root: 'B', signature: '#4' }
  },
  { description: 'F# Mixolydian',
    input: { root: 'F#', mode: 'mixolydian' },
    output: { root: 'F#', signature: '#5' }
  },
  { description: 'C# Mixolydian',
    input: { root: 'C#', mode: 'mixolydian' },
    output: { root: 'C#', signature: '#6' }
  },
  { description: 'G# Mixolydian',
    input: { root: 'G#', mode: 'mixolydian' },
    output: { root: 'G#', signature: '#7' }
  }
];

export const locrianModesTest = [
  { description: 'Bb Locrian',
    input: { root: 'Bb', mode: 'locrian' },
    output: { root: 'Bb', signature: 'b7' } 
  },
  { description: 'F Locrian',
    input: { root: 'F', mode: 'locrian' },
    output: { root: 'F', signature: 'b6' } 
  },
  { description: 'C Locrian',
    input: { root: 'C', mode: 'locrian' },
    output: { root: 'C', signature: 'b5' } 
  },
  { description: 'G Locrian',
    input: { root: 'G', mode: 'locrian' },
    output: { root: 'G' , signature: 'b4'} 
  },
  { description: 'D Locrian',
    input: { root: 'D', mode: 'locrian' },
    output: { root: 'D', signature: 'b3' } 
  },
  { description: 'A Locrian',
    input: { root: 'A', mode: 'locrian' },
    output: { root: 'A', signature: 'b2' } 
  },
  { description: 'E Locrian',
    input: { root: 'E', mode: 'locrian' },
    output: { root: 'E', signature: 'b1' } 
  },
  { description: 'B Locrian',
    input: { root: 'B', mode: 'locrian' },
    output: { root: 'B', signature: null } 
  },
  { description: 'F# Locrian',
    input: { root: 'F#', mode: 'locrian' },
    output: { root: 'F#', signature: '#1' } 
  },
  { description: 'C# Locrian',
    input: { root: 'C#', mode: 'locrian' },
    output: { root: 'C#', signature: '#2' } 
  },
  { description: 'G# Locrian',
    input: { root: 'G#', mode: 'locrian' },
    output: { root: 'G#', signature: '#3' } 
  },
  { description: 'D# Locrian',
    input: { root: 'D#', mode: 'locrian' },
    output: { root: 'D#', signature: '#4' }
  },
  { description: 'A# Locrian',
    input: { root: 'A#', mode: 'locrian' },
    output: { root: 'A#', signature: '#5' }
  },
  { description: 'E# Locrian',
    input: { root: 'E#', mode: 'locrian' },
    output: { root: 'E#', signature: '#6' }
  },
  { description: 'B# Locrian',
    input: { root: 'B#', mode: 'locrian' },
    output: { root: 'B#', signature: '#7' }
  }
];

export const scalesTest = [
  { description: 'E Major',
    input: { root: 'E', keySignature: '#4' },
    output: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']
  },
  { description: 'E Minor',
    input: { root: 'E', keySignature: '#1' },
    output: ['E', 'F#', 'G', 'A', 'B', 'C', 'D']
  },
  { description: 'E Dorian',
    input: { root: 'E', keySignature: '#2' },
    output: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D']
  },
  { description: 'E Phrygian',
    input: { root: 'E', keySignature: null },
    output: ['E', 'F', 'G', 'A', 'B', 'C', 'D']
  },
  { description: 'E Lydian',
    input: { root: 'E', keySignature: '#5' },
    output: ['E', 'F#', 'G#', 'A#', 'B', 'C#', 'D#']
  },
  { description: 'E Mixolydian',
    input: { root: 'E', keySignature: '#3' },
    output: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D']
  },
  { description: 'E Locrian',
    input: { root: 'E', keySignature: 'b1' },
    output: ['E', 'F', 'G', 'A', 'Bb', 'C', 'D']
  }
]
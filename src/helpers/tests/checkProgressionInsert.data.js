export const progressionInsertsPass = [
  {
    input: [
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: 'b6j',
        length: '1W'
      },
      {
        chord: 'b7j',
        length: '1W'
      },
      {
        chord: 'b2j7',
        length: '1W'
      },
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: 'b7j',
        length: '1W'
      },
      {
        chord: '4j',
        length: '1W'
      },
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: '5d7/b7',
        length: '1W'
      }
    ]
  },
  {
    input: [
      {
        chord: '1j7'
      },
      {
        chord: 'b2j7'
      },
      {
        chord: '5d7/2'
      },
      {
        chord: '5d7/5'
      },
      {
        chord: '1j7'
      },
      {
        chord: '4j'
      },
      {
        chord: '4-'
      },
      {
        chord: '5d7/b7'
      },
      {
        chord: 'b7j'
      },
      {
        chord: '1j'
      }
    ]
  }
];

export const progressionInsertsFail = [
  {
    input: [
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: 'b6j',
        length: '1W'
      },
      {
        chord: 'b7j',
        length: '1W'
      },
      {
        chord: 'b2j7',
        length: '1W'
      },
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: 'b7j',
        length: '1W'
      },
      {
        chord: '4j',
        length: '1W'
      },
      {
        chord: '1j',
        length: '1W'
      },
      {
        chord: '5d7/',
        length: '1W'
      }
    ]
  },
  {
    input: [
      {
        chord: '1j7'
      },
      {
        chord: 'b2j7'
      },
      {
        chord: '5d7/2'
      },
      {
        chord: '5d7/5-'
      },
      {
        chord: '1j7'
      },
      {
        chord: '4j'
      },
      {
        chord: '4-'
      },
      {
        chord: '5d7/b7'
      },
      {
        chord: 'b7j'
      },
      {
        chord: '1j'
      }
    ]
  }
];

export const chordInsertPass = [
  '1j',
  '2j',
  '3j',
  '4j',
  '5j',
  '6j',
  '7j',
  '1j6',
  '2j6',
  '3j6',
  '4j6',
  '5j6',
  '6j6',
  '7j6',
  '1j7',
  '2j7',
  '3j7',
  '4j7',
  '5j7',
  '6j7',
  '7j7',
  '1-',
  '2-',
  '3-',
  '4-',
  '5-',
  '6-',
  '7-',
  '1-7',
  '2-7',
  '3-7',
  '4-7',
  '5-7',
  '6-7',
  '7-7',
  '1-7/1',
  '2-7/2',
  '3-7/3',
  '4-7/4',
  '5-7/5',
  '6-7/6',
  '7-7/7',
  '1h7',
  '2h7',
  '3h7',
  '4h7',
  '5h7',
  '6h7',
  '7h7',
  '1f7',
  '2f7',
  '3f7',
  '4f7',
  '5f7',
  '6f7',
  '7f7',
  '1d7',
  '2d7',
  '3d7',
  '4d7',
  '5d7',
  '6d7',
  '7d7',
  '1d7/1',
  '2d7/2',
  '3d7/3',
  '4d7/4',
  '5d7/5',
  '6d7/6',
  '7d7/7',
  'b1d7/1',
  '#2d7/2',
  'b3d7/3',
  'b4d7/b4',
  'b5d7/b5',
  'b6d7/#6',
  '7d7/7'
];

export const chordInsertFail = [
  '8j',
  '',
  '5d7/4j',
  '5d7/8',
  '5d7/4-7',
  '/',
  '57',
  '1',
  '5/5',
  '5d7/b7j'
];
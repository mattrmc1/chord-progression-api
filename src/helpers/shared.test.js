import { getKeySignatureSimple, getRelativeKeySignature } from './shared';

const signatures = [
  {
    description: 'G Major',
    input: { root: 'G' },
    output: { root: 'G', signature: '#1' }
  },
  {
    description: 'D Major',
    input: { root: 'D' },
    output: { root: 'D', signature: '#2' }
  },
  {
    description: 'A Major',
    input: { root: 'A' },
    output: { root: 'A', signature: '#3' }
  },
  {
    description: 'F# Minor',
    input: { root: 'F#', mode: 'minor' },
    output: { root: 'F#', signature: '#3' }
  },
]

signatures.forEach( s => test('Simple Signature: ' + s.description, () => {
  expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
}));

// const relativeSignatures = [
//   {
//     description: 'Orig: G Major, New: A minor',
//     input: { targetRoot: 'A', targetMode: 'minor', origRoot: 'G', origMode: 'major' },
//     output: { anchor: 'C', signature: null }
//   }
// ]

// relativeSignatures.forEach( r => test('Relative Signature // ' + r.description, () => {
//   expect(getRelativeKeySignature(r.input)).toStrictEqual(r.output);
// }))
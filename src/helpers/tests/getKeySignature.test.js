import getKeySignature from '../getKeySignature';
import {
  majorKeysTest,
  minorKeysTest,
  dorianModesTest,
  phrygianModesTest,
  lydianModesTest,
  mixolydianModesTest,
  locrianModesTest,
  enharmonicCorrectionsTest
 } from './getKeySignature.data';

describe('Key Signatures: Major', () => {
  majorKeysTest.forEach( s => test('Simple Signature: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  test('Illegal Key Signatures', () => {
    expect(() => getKeySignature({ root: "H" })).toThrow(new Error('Illegal note name: H'));
    expect(() => getKeySignature({ root: "C", mode: "Bogus" })).toThrow(new Error('Illegal mode: Bogus'));
    expect(() => getKeySignature(null)).toThrow();
  });
});

describe('Key Signatures: Minor', () => {
  minorKeysTest.forEach( s => test('Minor Keys: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
});

describe('Key Signatures: Modes', () => {
  dorianModesTest.forEach( s => test('Dorian Modes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  phrygianModesTest.forEach( s => test('Phrygian Modes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  lydianModesTest.forEach( s => test('Lydian Modes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  mixolydianModesTest.forEach( s => test('Mixolydian Modes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  locrianModesTest.forEach( s => test('Locrian Modes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  enharmonicCorrectionsTest.forEach( s => test('Enharmonic Mode Changes: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }))
});
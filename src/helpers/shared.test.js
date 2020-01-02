import { getKeySignature, getScale, getRelative } from './shared';
import {
  majorKeysTest,
  minorKeysTest,
  scalesTest,
  dorianModesTest,
  phrygianModesTest,
  lydianModesTest,
  mixolydianModesTest,
  locrianModesTest,
  enharmonicCorrectionsTest,
  relativeModes
 } from './testData';

describe('Key Signatures: Major', () => {
  majorKeysTest.forEach( s => test('Simple Signature: ' + s.description, () => {
    expect(getKeySignature(s.input)).toStrictEqual(s.output);
  }));
  test('Illegal Key Signatures', () => {
    expect(() => getKeySignature({ root: "H" })).toThrow(new Error('Illegal note name'));
    expect(() => getKeySignature({ root: "C", mode: "Bogus" })).toThrow(new Error('Illegal mode'));
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
  test.only('whatev', () => {
    getRelative({ root: "G", mode: "lydian" }, { root: "Eb", mode: "major" });
    getRelative({ root: "F", mode: "major" }, { root: "Bb", mode: "major" });
    getRelative({ root: "G", mode: "minor" }, { root: "Eb", mode: "major" });
    getRelative({ root: "D", mode: "dorian" }, { root: "D", mode: "major" });
    expect(true).toBe(true);
  })
});

describe('Scales', () => {
  scalesTest.forEach( s => test('Scale: ' + s.description, () => {
    expect(getScale(s.input)).toStrictEqual(s.output);
  }));

  test('Illegal Scales', () => {
    expect(() => getScale({ root: "C", keySignature: "bogus" })).toThrow(new Error('Illegal key signature: bogus'));
    expect(() => getScale({ root: "Gb", keySignature: "b9" })).toThrow(new Error('Illegal key signature: b9'));
    expect(() => getScale({ root: "H", keySignature: "#1"} )).toThrow(new Error('Illegal note name: H'));
    expect(() => getScale({ keySignature: "b3" })).toThrow(new Error('Note name can not be null'));
    expect(() => getScale(null)).toThrow();
  });
});

describe('Relative Modes', () => {
  relativeModes.forEach(m => test(m.description, () => expect(getRelative(...m.input)).toStrictEqual(m.output) ));
})
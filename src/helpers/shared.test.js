import { getKeySignatureSimple, getScale } from './shared';
import { majorKeysTest, minorKeysTest, scalesTest, dorianModesTest, phrygianModesTest, lydianModesTest, mixolydianModesTest, locrianModesTest } from './testData';

describe('Key Signatures: Major', () => {
  majorKeysTest.forEach( s => test('Simple Signature: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
  test('Illegal Key Signatures', () => {
    expect(() => getKeySignatureSimple({ root: "H" })).toThrow(new Error('Illegal note name'));
    expect(() => getKeySignatureSimple({ root: "C", mode: "Bogus" })).toThrow(new Error('Illegal mode'));
    expect(() => getKeySignatureSimple(null)).toThrow();
  });
});

describe.skip('Key Signatures: Minor', () => {
  minorKeysTest.forEach( s => test('Minor Keys: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
});

describe.skip('Key Signatures: Modes', () => {
  dorianModesTest.forEach( s => test('Dorian Modes: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
  phrygianModesTest.forEach( s => test('Phrygian Modes: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
  lydianModesTest.forEach( s => test('Lydian Modes: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
  mixolydianModesTest.forEach( s => test('Mixo Modes: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
  locrianModesTest.forEach( s => test('Locrian Modes: ' + s.description, () => {
    expect(getKeySignatureSimple(s.input)).toStrictEqual(s.output);
  }));
});

describe('Scales', () => {
  scalesTest.forEach( s => test('Scale: ' + s.description, () => {
    expect(getScale(s.input)).toStrictEqual(s.output);
  }));

  test('Illegal Scales', () => {
    expect(() => getScale({ root: "C", keySignature: "bogus" })).toThrow(new Error('Illegal key signature (Ex: "b3" or "#5")'));
    expect(() => getScale({ root: "H", keySignature: "#1"} )).toThrow(new Error('Illegal note name'));
    expect(() => getScale(null)).toThrow();
    expect(() => getScale({ keySignature: "b3" })).toThrow();
  });
});
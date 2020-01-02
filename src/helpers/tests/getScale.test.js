import getScale from '../getScale';
import { scalesTest } from './getScale.data';

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
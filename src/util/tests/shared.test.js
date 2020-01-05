import { majorKeys, relativeMajors, modesUnit, enharmonicUnit } from './shared.data';
import { getMajorKey, getRelativeMajor, modes, swapEnharmonicValues } from '../shared';

describe('Utility Unit Tests: getMajorKey = (root) => keySignature', () => {
  majorKeys.forEach(m => {
    test('Key: ' + m.input, () => expect(getMajorKey(m.input)).toStrictEqual(m.output));
  });
  test('Invalid Root', () => {
    expect(() => getMajorKey('H').toThrow(new Error('Invalid Major Root: H')))
    expect(() => getMajorKey().toThrow(new Error('Invalid Major Root: null')))
    expect(() => getMajorKey('A#').toThrow(new Error('Invalid Major Root: H')))
  })
});

describe('Utility Unit Tests: getRelativeMajor = (root, ?mode) => newMajorRoot', () => {
  relativeMajors.forEach(m => {
    test(`Key: ${m.input.root}, Mode: ${m.input.mode}`, () => {
      expect(getRelativeMajor(...m.input)).toStrictEqual(m.output)
    })
  })
});

describe('Utility Unit Tests: modes', () => {
  modesUnit.forEach(root => {
    Object.keys(root.output).forEach(mode => {
      test(`Key: ${root.input}, Mode: ${mode}`, () => {
        if (root.output[mode] === 'INVALID')
          expect(() => modes[mode](root.input)).toThrow()
        else
          expect(modes[mode](root.input)).toStrictEqual(root.output[mode]);
      })
    });
  });
});

describe('Utility Unit Tests: swapEnharmonicValues', () => {
  enharmonicUnit.forEach(h => {
    test(h.description, () => {
      expect(swapEnharmonicValues(h.keys[0])).toBe(h.keys[1]);
      expect(swapEnharmonicValues(h.keys[1])).toBe(h.keys[0]);
    })
  });
})
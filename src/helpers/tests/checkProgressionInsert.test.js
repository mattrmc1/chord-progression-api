import checkProgressionInsert, { checkChord } from "../checkProgressionInsert";
import { progressionInsertsPass, progressionInsertsFail, chordInsertPass, chordInsertFail } from "./checkProgressionInsert.data";

describe('checkProgresionInsert', () => {
  progressionInsertsPass.forEach(p => {
    test('Passing inserts', () => {
      expect(checkProgressionInsert(p.input)).toBeUndefined();
    })
  });
  progressionInsertsFail.forEach(p => {
    test('Failing inserts', () => {
      expect(() => checkProgressionInsert(p.input)).toThrow();
    })
  });
});

describe('checkChord', () => {
  chordInsertPass.forEach( chord => {
    test('Passing Chords', () => {
      expect(checkChord(chord)).toBeUndefined();
    })
  });
  chordInsertFail.forEach( chord => {
    test('Passing Chords', () => {
      expect(() => checkChord(chord)).toThrow();
    })
  });
});
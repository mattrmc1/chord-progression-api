import { chordType } from "../util/shared";

export default progression => {
  for (let i = 0; i < progression.length; i++) {
    let chord = progression[i].chord;
    checkChord(chord);
    let rhythm = progression[i].length;
    checkRhythm(rhythm);
  }
};

export const checkChord = chord => {
  if (chord.split('').includes('/')) {
    let right = chord.split('/')[1];
    let left = chord.split('/')[0];

    if (right.length > 2) {
      throw new Error(`Target chord should not have a quality (Ex: 5d7/5 is correct -- 5d7/5d7 is incorrect): ${chord}`);
    } else {
      checkChord(right + 'j');
      checkChord(left);
    }
  } else {
    let accidentalDisplacement = isNaN(parseInt(chord[0])) ? 1 : 0;
    let isClear = 
      (accidentalDisplacement === 0 || ['b', '#'].includes(chord[0])) // check accidental if present
      && !isNaN(parseInt(chord[accidentalDisplacement])) // second part is number
      && parseInt(chord[accidentalDisplacement]) < 8 && parseInt(chord[accidentalDisplacement]) > 0 // second part is 1-7
      && Object.keys(chordType).includes(chord.slice(1 + accidentalDisplacement)) // third part is legal type
    if (!isClear) throw new Error(`Illegal chord format: ${chord}`);
  }
};

const checkRhythm = rhythm => {
  // TODO
  return;
};
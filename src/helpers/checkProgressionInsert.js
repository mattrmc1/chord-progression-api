import { chordType } from "../util/shared";

export default progression => {
  for (let i = 0; i < progression.length; i++) {
    let chord = progression[i].chord;
    checkChord(chord);
    let rhythm = progression[i].length;
    checkRhythm(rhythm);
  }
};

const checkChord = chord => {
  if (chord.split('').includes('/')) {
    let right = chord.split('/')[1];
    let left = chord.split('/')[0];
    if (right.length > 2) {
      throw new Error(`Too long on right side: ${chord}`);
    } else {
      checkChord(right + 'j');
      checkChord(left);
    }
  } else {
    if (isNaN(parseInt(chord[0]))) {
      let isClear = 
        ['b', '#'].includes(chord[0]) // is legal accidental
        && !isNaN(parseInt(chord[1])) // second part is number
        && parseInt(chord[1]) < 8 && parseInt(chord[1]) > 0 // second part is 1-7
        && Object.keys(chordType).includes(chord.slice(2)) // third part is legal type
      if (!isClear) throw new Error(`nah: ${chord}`);
    } else {
      let isClear = 
        !isNaN(parseInt(chord[0])) // second part is number
        && parseInt(chord[0]) < 8 && parseInt(chord[0]) > 0 // second part is 1-7
        && Object.keys(chordType).includes(chord.slice(1)) // third part is legal type
      if (!isClear) throw new Error(`nah: ${chord}`);
    }
  }
}

const checkRhythm = rhythm => {
  // TODO
  return;
}
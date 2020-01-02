import getRelative from '../getRelative';
import { relativeModes } from './getRelative.data';

describe('Relative Modes', () => {
  relativeModes.forEach(m => test(m.description, () => expect(getRelative(...m.input)).toStrictEqual(m.output) ));

  // To do: error handling
})
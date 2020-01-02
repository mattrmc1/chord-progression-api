import mapProgression from '../mapProgression';
import { progressions } from './mapProgression.data';

describe('Progression Mapping', () => {
  
  progressions.forEach( p => test('Map Progression', () => {
    expect(mapProgression(p.input)).toStrictEqual(p.output);
  }));
});
import { notePositions, modes, swapEnharmonicValues } from '../util/shared';

export default ({ root, mode = 'ionian' }) => {
  if (!Object.keys(notePositions).includes(root))
    throw new Error(`Illegal note name: ${root}`);
  if (!Object.keys(modes).includes(mode))
    throw new Error(`Illegal mode: ${mode}`);
  
  let signature = null;
  try {
    signature = modes[mode](root);
  } catch {
    root = swapEnharmonicValues(root);
    signature = modes[mode](root);
  }
  return { root, signature };
};
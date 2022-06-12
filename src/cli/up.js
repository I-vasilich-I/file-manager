import { getRootDir } from '../helpers.js';
import { cd } from './cd.js';

export const up = (currentDir) => {
  const folders = currentDir.split('/');

  const hasFoldersUpper = folders.length > 1;

  if (!hasFoldersUpper) {
    return;
  }

  folders.pop();
  const upperPath = folders.length === 1 ? getRootDir() : folders.join('/');
  cd(upperPath);
}
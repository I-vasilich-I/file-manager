import { getRootDir, currentDirMessage, getCurrentDir } from '../../helpers.js';
import { cd } from './cd.js';

export const up = (currentDir) => {
  try {
    const folders = currentDir.split('/');
  
    const hasFoldersUpper = folders.length > 1;
  
    if (!hasFoldersUpper) {
      return;
    }
  
    folders.pop();
    const upperPath = folders.length === 1 ? getRootDir() : folders.join('/');
    cd(upperPath);
  } catch {
    console.log('Operation failed')
  }
}
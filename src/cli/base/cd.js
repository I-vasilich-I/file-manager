import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const cd = (path) => {
  try {
    process.chdir(path);
  } catch {
    console.log('Operation failed');
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
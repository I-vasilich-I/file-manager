import { readdir } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const ls = async (path) => {
  try {
    const files = await readdir(path);
    console.log(files);
  } catch {
    console.log('Operation failed')
  } finally {
    currentDirMessage(getCurrentDir());
  }
} 
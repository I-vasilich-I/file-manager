import { rename } from 'fs/promises';
import { currentDirMessage, getCurrentDir, isPathExist } from '../../helpers.js';

export const rn = async ([oldName, newName]) => {
  try {
    await rename(oldName, newName);
  } catch {
    console.log('Operation failed')
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
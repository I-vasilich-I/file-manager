import { rename } from 'fs/promises';
import { currentDirMessage, getCurrentDir, isPathExist } from '../../helpers.js';

export const rn = async ([oldName, newName]) => {
  try {
    await rename(oldName, newName);
  } catch (error) {
    console.error(error);
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
import { rename } from 'fs/promises';
import { currentDirMessage, getCurrentDir, isPathExist } from '../helpers.js';

export const rn = async ([oldName, newName]) => {
  const isNewNameFileExist = isPathExist(newName);

  try {
    if (isNewNameFileExist) {
      throw new Error('file already exist');
    }

    await rename(oldName, newName);
  } catch (error) {
    console.error(error);
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
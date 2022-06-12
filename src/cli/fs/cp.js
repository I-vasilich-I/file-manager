import { copyFile } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const cp = async ([ fileName, folderPath ], silent = false) => {
  try {
    await copyFile(fileName, `${folderPath}/${fileName}`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    if (!silent) {
      currentDirMessage(getCurrentDir());
    }
  }
}
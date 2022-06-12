import { unlink } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../helpers.js';

export const rm = async ([ filePath ]) => {
  try {
    await unlink(filePath);
  } catch (error) {
    console.error(error);
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
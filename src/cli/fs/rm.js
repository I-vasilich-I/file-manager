import { unlink } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const rm = async ([ filePath ]) => {
  try {
    await unlink(filePath);
  } catch {
    console.log('Operation failed')
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
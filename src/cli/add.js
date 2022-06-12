import { open } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../helpers.js';

export const add = async (fileName) => {
  try {
    await open(fileName, 'wx+');
  } catch (error) {
    console.error(error);
  } finally {
    currentDirMessage(getCurrentDir());
  }
}
import { readdir } from 'fs/promises';

export const ls = async (path) => {
  try {
    const files = await readdir(path);
    console.log(files);
  } catch (error) {
    console.error(error);
  }
} 
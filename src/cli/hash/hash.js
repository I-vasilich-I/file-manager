import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const hash = async ([ filePath ]) => {
  try {
    const fileBuffer = await readFile(filePath);
    const hashSum = createHash('sha256');

    hashSum.update(fileBuffer);
    
    const hex = hashSum.digest('hex');
  
    console.log(hex);
  } catch {
    console.log('Operation failed');
  } finally {
    currentDirMessage(getCurrentDir());
  }
}

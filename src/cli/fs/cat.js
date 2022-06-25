import { createReadStream } from 'fs'
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const cat = (path) => {
  const readStream = createReadStream(path, 'utf-8');
  readStream.on('open', () => readStream.pipe(process.stdout));

  readStream.on('error', () => console.log('Operation failed'));

  readStream.on('close', () => currentDirMessage(getCurrentDir()));
}
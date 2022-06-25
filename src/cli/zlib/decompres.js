import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const decompress = ([ filePath, folderPath ]) => {
  try {
    const zipFile = createReadStream(filePath);
    const unzip = createWriteStream(folderPath);
    const brotli = createBrotliDecompress();
  
    const stream = zipFile.pipe(brotli).pipe(unzip);

    brotli.on('error', () => {
      console.log('Operation failed');
      currentDirMessage(getCurrentDir())
    });
    stream.on('error', () => console.log('Operation failed'));
    stream.on('finish', () => currentDirMessage(getCurrentDir()));
  } catch {
    console.log('Operation failed');
    currentDirMessage(getCurrentDir());
  } 
}
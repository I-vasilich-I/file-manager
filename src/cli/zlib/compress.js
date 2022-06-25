import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createBrotliCompress } from 'zlib';
import { currentDirMessage, getCurrentDir } from '../../helpers.js';

export const compress = ([ filePath, folderPath ]) => {
  try {
    const file = createReadStream(filePath);
    const zipPath = path.resolve(`${folderPath}/${filePath.slice(0, -4)}.br`);
    const zip = createWriteStream(zipPath);
    const brotli = createBrotliCompress();
    const stream = file.pipe(brotli).pipe(zip);

    brotli.on('error', () => {
      console.log('Operation failed');
      currentDirMessage(getCurrentDir())
    });
    stream.on('error', () => console.log('Operation failed'));
    stream.on('finish', () => currentDirMessage(getCurrentDir()));
  } catch {
    console.log('Operation failed');
    currentDirMessage(getCurrentDir())
  }
}
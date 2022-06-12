import { 
  getCurrentDir,
  getPathToGo,
  getComandProps,
  getUserName, 
  getHomeDir, 
  getCommand, 
  welcomeMessage,
  currentDirMessage 
} from './helpers.js';
import { cd } from './cli/base/cd.js';
import { exit } from './cli/base/exit.js';
import { ls } from './cli/base/ls.js';
import { up } from './cli/base/up.js';
import { add } from './cli/fs/add.js';
import { cat } from './cli/fs/cat.js';
import { cp } from './cli/fs/cp.js';
import { mv } from './cli/fs/mv.js';
import { rm } from './cli/fs/rm.js';
import { rn } from './cli/fs/rn.js';
import { os } from './cli/os/os.js';
import { hash } from './cli/hash/hash.js';
import { compress } from './cli/zlib/compress.js';
import { decompress } from './cli/zlib/decompres.js';


const start = async () => {
  const userName = getUserName();
  welcomeMessage(userName);
  
  cd(getHomeDir());

  currentDirMessage(getCurrentDir());
  
  process.stdin.on('data', (data) => {
    const command = getCommand(data);

    if (command === '.exit') {
      exit(userName);
    }

    // nwd
    if (command === 'up') {
      up(getCurrentDir());
      currentDirMessage(getCurrentDir());
      return;
    }

    if (command ==='ls') {
      ls(getCurrentDir());
      currentDirMessage(getCurrentDir());
      return;
    }

    if (command.startsWith('cd')) {
      cd(getPathToGo(command));
      currentDirMessage(getCurrentDir());
      return;
    }

    // fs
    if (command.startsWith('cat')) {
      cat(getPathToGo(command))
      return;
    }

    if (command.startsWith('add')) {
      add(getPathToGo(command))
      return;
    }

    if (command.startsWith('rn')) {
      rn(getComandProps(command))
      return;
    }

    if (command.startsWith('cp')) {
      cp(getComandProps(command))
      return;
    }

    if (command.startsWith('rm')) {
      rm(getComandProps(command))
      return;
    }

    if (command.startsWith('mv')) {
      mv(getComandProps(command))
      return;
    }

    // os
    if (command.startsWith('os')) {
      os(getComandProps(command))
      return;
    }

    // hash
    if (command.startsWith('hash')) {
      hash(getComandProps(command))
      return;
    }

    // zlib
    if (command.startsWith('compress')) {
      compress(getComandProps(command))
      return;
    }

    if (command.startsWith('decompress')) {
      decompress(getComandProps(command))
      return;
    }


    console.log("Invalid input");
    currentDirMessage(getCurrentDir())

  });

  process.on('SIGINT', () => {
    process.stdout.clearLine();
    exit(userName);
  })
}

start();

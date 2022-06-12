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
    }

    if (command ==='ls') {
      ls(getCurrentDir());
      currentDirMessage(getCurrentDir());
    }

    if (command.startsWith('cd')) {
      cd(getPathToGo(command));
      currentDirMessage(getCurrentDir());
    }

    // fs
    if (command.startsWith('cat')) {
      cat(getPathToGo(command))
    }

    if (command.startsWith('add')) {
      add(getPathToGo(command))
    }

    if (command.startsWith('rn')) {
      rn(getComandProps(command))
    }

    if (command.startsWith('cp')) {
      cp(getComandProps(command))
    }

    if (command.startsWith('rm')) {
      rm(getComandProps(command))
    }

    if (command.startsWith('mv')) {
      mv(getComandProps(command))
    }

    // os
    if (command.startsWith('os')) {
      os(getComandProps(command))
    }

    // hash
    if (command.startsWith('hash')) {
      hash(getComandProps(command))
    }
  });

  process.on('SIGINT', () => {
    process.stdout.clearLine();
    exit(userName);
  })
}

start();

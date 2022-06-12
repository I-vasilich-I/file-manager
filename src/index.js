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
import { add } from './cli/add.js';
import { cat } from './cli/cat.js';
import { cd } from './cli/cd.js';
import { cp } from './cli/cp.js';
import { exit } from './cli/exit.js';
import { ls } from './cli/ls.js';
import { mv } from './cli/mv.js';
import { up } from './cli/up.js';
import { rm } from './cli/rm.js';
import { rn } from './cli/rn.js';


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
  });

  process.on('SIGINT', () => {
    process.stdout.clearLine();
    exit(userName);
  })
}

start();

import { 
  getCurrentDir,
  getPathToGo,
  getUserName, 
  getHomeDir, 
  getCommand, 
  welcomeMessage,
  currentDirMessage 
} from './helpers.js';
import { cd } from './cli/cd.js';
import { exit } from './cli/exit.js';
import { ls } from './cli/ls.js';
import { up } from './cli/up.js';

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
  });

  process.on('SIGINT', () => {
    process.stdout.clearLine();
    exit(userName);
  })
}

start();

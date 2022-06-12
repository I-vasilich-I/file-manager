import { EOL, cpus, userInfo, arch } from 'os';
import { currentDirMessage, getCurrentDir, getHomeDir } from '../../helpers.js';

export const os = ([ arg ]) => {
  switch (arg) {
    case '--EOL':
      console.log(EOL.split(''));
      break;
    case '--cpus': 
      console.log(cpus());
      break;
    case '--homedir':
      console.log(getHomeDir());
      break;
    case '--username': 
      console.log(userInfo().username);
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.log('Operation failed');
      break;
  }
  
  currentDirMessage(getCurrentDir());
}
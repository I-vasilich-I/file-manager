import { userInfo } from 'os';
import { parse } from 'path';

const getUserName = () => {
  const args = process.argv.slice(2);

  return args[0]?.split('=')[1] || 'User';
};

const getHomeDir = () => userInfo().homedir;

const getRootDir = () => parse(process.cwd()).root;

const getCommand = (data) => data.toString('utf-8').trim();

const getCurrentDir = () => process.cwd();

const welcomeMessage = (userName) => 
  console.log(`Welcome to the File Manager, ${userName}!`);

const currentDirMessage = (currentDir) => 
  console.log(`You are currently in ${currentDir}`);

const getComandProps = (command) => command.split(/\s/g).slice(1); 

const getPathToGo = (command) => getComandProps(command)[0];

export {
  getUserName,
  getHomeDir,
  getRootDir,
  getCommand,
  welcomeMessage,
  currentDirMessage,
  getComandProps,
  getCurrentDir,
  getPathToGo,
}
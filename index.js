import { stdin, cwd, chdir } from 'node:process';
import os from 'node:os';

const userName =
  process.argv.find((item) => item.startsWith('--')).split('=')[1] ||
  'UserName';

chdir(os.homedir());

stdin.on('data', (text) => {
  const command = String(text).trim();

  switch (command) {
    case '.exit':
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      process.exit(0);
    default:
      console.log('Invalid input');
      break;
  }

  console.log(`You are currently in ${cwd()}`);
});

process.on('SIGINT', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
  process.exit(0);
});

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${cwd()}`);

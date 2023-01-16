import { execa } from 'execa';

async function myScript() {
  const { stdout } = await execa('echo', ['from the script file']);
  console.log(stdout);
}

myScript()
  .then(() => console.log('done'))
  .catch((e) => console.error(e));

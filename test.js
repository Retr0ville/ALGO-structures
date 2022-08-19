const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getInput = async () => {
  return  await rl.question('? ');
}
var a =  getInput();
var b =   getInput();
console.log(a, b);

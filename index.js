const googleIt = require('./google-it');

const [,,...cliArgs] = process.argv;
if (!cliArgs[0]) {
    console.error("please enter a value");
    return;
}
googleIt(cliArgs[0])
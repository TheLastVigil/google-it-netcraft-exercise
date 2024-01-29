const googleIt = require("./google-it");
const htmlOpener = require("./html-creator");

const [, , ...cliArgs] = process.argv;
if (!cliArgs[0]) {
  console.error("please enter a value");
  return;
}
switch (cliArgs[0]) {
  case "google":
    if (!cliArgs[1]) {
        console.error("please enter a second value");
        return
    }
    googleIt(cliArgs[1]);
    break;
  case "html":
    if (!cliArgs[1]) {
        console.error("please enter a second value");
        return
    }
    htmlOpener(cliArgs[1]);
    break;
  default:
    console.error(
      "value does not exist use either 'google' or 'html' as the first value"
    );
    break;
}

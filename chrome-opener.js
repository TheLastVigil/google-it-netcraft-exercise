const { exec } = require('child_process');

function chromeOpener(searchValue) {
    exec(`start chrome https://letmegooglethat.com/?q=${searchValue}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
}

module.exports = chromeOpener;
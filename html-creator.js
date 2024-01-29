const { exec } = require('child_process');

function htmlOpener(searchValue) {
    exec(`start chrome https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${searchValue}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
}

module.exports = htmlOpener;

const chromeOpener = require('./chrome-opener');

function googleIt(searchValue) {
    chromeOpener(searchValue)
}

module.exports = googleIt;
const os = require('os');
const fs = require('fs');
require('dotenv').config('.env');

//======> Configurations <======
let homeDir = os.userInfo().homedir;
let saveTo = process.env.SAVEPATH;
//======> Reading OS information <======
async function readingOSInfo() {
    let fileContents = 'Platform: ' + os.platform + '\n';
    fileContents += 'Release No: ' + os.release + '\n';
    fileContents += 'Username: ' + os.userInfo().username + '\n';
    fileContents += 'Home Directory: ' + os.userInfo().homedir + '\n';
    fileContents += 'Shell Location: ' + os.userInfo().shell + '\n';
    fileContents += 'Version: ' + os.version() + '\n';
    fileContents += 'CPU Arch: ' + os.arch() + '\n';
    for (let i = 0; i < Object.keys(os.cpus()).length; i++) {
        fileContents += 'CPU Core ' + (i+1) + ' Model: ' + os.cpus()[i].model + '\n';
        fileContents += 'CPU Core ' + (i+1) + ' Speed: ' + (os.cpus()[i].speed) + 'MHz\n';
    }
    return fileContents;
}

//======> Writing File <======
function writeOSInfo(content) {
    let path = homeDir + saveTo;
    fs.writeFile(path, content, err => {
    });
}

async function res() {
    let OS = await new Promise((resolve, reject) => {
        resolve(readingOSInfo());
    });
    return OS;
}

res().then(function (os) {
    writeOSInfo(os);
});





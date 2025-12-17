const {log} = require('console');
const path = require('path');
const os = require('os');

console.log(__dirname);
console.log(__filename);
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.join("users", "arjun", "documents", "project"));

console.log(path.normalize("//folder//subfolder////file.txt"));

console.log(path.isAbsolute("D:/SEM-4/BEWT/Lab4"));

console.log(path.resolve( "folder", "subfolder", "app.js" ));

console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024/1024);

console.log(os.userInfo());

console.log(os.uptime()/86400);

console.log(os.cpus());
console.log(os.networkInterfaces());
















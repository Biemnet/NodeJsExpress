const { log } = require("console");
const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem()
};

console.log(currentOS);
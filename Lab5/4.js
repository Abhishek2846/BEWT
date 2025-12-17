const url = require('url');
const myURL = "https://github.com?name=abhishek&age=19";

const parsedURL = new URL(myURL);

console.log("Protocol:", parsedURL.protocol);
console.log("Hostname:", parsedURL.hostname);
console.log("Pathname:", parsedURL.pathname);

console.log("Query Parameters:");
parsedURL.searchParams.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

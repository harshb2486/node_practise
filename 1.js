require("./db.js");
console.log("hello from 1.js");

function showmessage(message) {
    console.log(message);
}
module.exports = showmessage;

console.log(this);  
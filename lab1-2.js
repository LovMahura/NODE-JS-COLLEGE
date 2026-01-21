const fs = require("fs");

// /* LAB 1: Read File using r flag */
// fs.readFile("read.txt", { flag: "r", encoding: "utf8" }, (err, data) => {
//     if (err) throw err;
//     console.log("Read File Content:");
//     console.log(data);
// });

/* LAB 2: Write File using w flag */
// fs.writeFile("write.txt", "Hello World", { flag: "w" }, () => {
//     console.log("File written successfully");
// });

/* LAB 3: Append Data Using a Flag*/
fs.writeFile("log.txt", "Log Entry\n", {flag:"a"}, ()=> {
    console.log("Data Appended Successfully")
})
const fs = require("fs");

fs.writeFile("asyncFile.txt", "Welcome to File System Module", (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("Async file created");
    }
});

fs.appendFile("asyncFile.text", "\nNew Data added", (err) => {
    if(err) {
        console.log("Error Appending");
    }
    else{
        console.log("Async Data Appended");
    }
});
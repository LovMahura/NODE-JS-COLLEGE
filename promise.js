import { writeFile } from "fs/promises";

writeFile("promiseFile.txt", "File created using promises")
    .then(() => {
        console.log("Promise file created");
    })
    .catch(() => {});
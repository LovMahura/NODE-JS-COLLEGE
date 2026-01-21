import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>This is Gate of the HELL</h1>");
    }
    else if (req.url === "/about_us") {
        res.write("This is About HELL");
    }
    else if (req.url === "/contact") {
        res.write("This is Contact of HELL");
    }
     else {
        res.statusCode = 404;
        res.write("404 Page Not Found of HELL");
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
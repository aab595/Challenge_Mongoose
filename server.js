// const _exec = async () => {
//     const mongoose = require('mongoose')
    
//     const main = require('./src/main')

//     const http = require('http')
//     const hostname = '127.0.0.1';
//     const port = 8080;

//     const server = http.createServer(async (req, res) => {
//     res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         await main.connecter();
//         const result = await main.getAllCourseById("61b9f46edeea1bb406d67a3c");
//         res.end(`${result}`);
//     });
    
//     server.listen(port, hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     });
// };

// _exec();

const mongoose = require('mongoose')
const express = require('express')
const main = require('./src/main')
const dbService = require('./src/services/DBService')

app = express();

dbService.connecter();

app.get('/participants', (req, res) => {
    try {
        let output = main.getAllCourses;
        res.json(output);
    } catch (error) {
        console.error(error)
    }
})

app.listen(3030, () =>  console.log('Server listening on port 3030'))
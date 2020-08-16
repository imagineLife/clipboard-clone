// Dependencies
const express = require('express');
const multer = require('multer');
const bp = require('body-parser');
const uuid = require('uuid');
const path = require('path')
const http = require('http');

// handlers
const { crashReportHandler } = require('./handlers/crashReport');
const { exceptionsHandler } = require('./handlers/exceptions')
// Vars
const SERVER_PORT = 8082;
const crashesPath = path.join(__dirname, 'crashes');
const exceptionsPath = path.join(__dirname, 'uncaughtexceptions');

const app = express();
const httpServer = http.createServer(app);

// body-parser middleware
app.use(bp.urlencoded({extended:false}));

// multer middleware
const multerMW = multer({dest: crashesPath}).single('upload_file_minidump');

//endpoints
app.post('/crashreports', multerMW, crashReportHandler)
app.post('./uncaughtexceptions', exceptionsHandler)

httpServer.listen(SERVER_PORT, () => {
	console.log('crash-server running');
});

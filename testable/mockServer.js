// Dependencies
const express = require('express');
const multer = require('multer');
const bp = require('body-parser');
const uuid = require('uuid');
const wf = require('write-file');
const path = require('path')
const http = require('http');

// Vars
const SERVER_PORT = 8082;


const app = express();
const httpServer = http.createServer(app);

// body-parser middleware
app.use(bp.urlencoded({extended:false}));

httpServer.listen(SERVER_PORT, () => {
	console.log('crash-server running');
});

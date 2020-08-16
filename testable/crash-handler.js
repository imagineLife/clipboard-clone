/*
	a self-running module with no exports 
	:/	
*/
const request = require('request');
const { crashReporter } = require('electron');
const manifest = require('./package.json');

const API_HOST = `http://localhost:8082`

const cObj = {
	productName: 'demo-crash-test',
	companyName: 'Crash Test Examples',
	submitURL: `${API_HOST}/crashreports`,
	uploadToServer: true
}

crashReporter.start(cObj);

// ...sends uncaught Exception
const sendUncaughtException = e => {
	console.log('- - - -sendUncaughtException- - - -');
	const { productName, companyName } = cObj;

	// log this process
	console.info('Catching Error', e);

	let postRoute = `${API_HOST}/uncaughtexceptions`
	console.log('postRoute')
	console.log(postRoute)
	
	request.post(postRoute, {
		_productName: productName,
		_companyName: companyName,
		_version: manifest.version,
		platform: process.platform,
		process_type: process.type,
		e: {
			name: e.name,
			message: e.message,
			fileName: e.fileName,
			stack: e.stack,
			lineNumber: e.lineNumber,
			columnNumber: e.columnNumber
		}
	})
}

/*
	"Catch" errors
*/
// if in "main" process
if(process.type === 'browser'){
	process.on('uncaughtException', sendUncaughtException);
}else{
	console.log('NOT browser process');
	window.addEventListener('error', sendUncaughtException);
	console.log('Registered!');
}

module.exports = crashReporter;
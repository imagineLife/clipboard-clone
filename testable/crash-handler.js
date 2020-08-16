/*
	a self-running module with no exports 
	:/
	
*/
const { crashReporter } = require('electron');

const API_HOST = `http://localhost:8082`

const c = {
	productName: 'demo-crash-test',
	companyName: 'Crash Test Examples',
	submitURL: `${API_HOST}/crashreports`,
	uploadToServer: true
}

crashReporter.start(c);
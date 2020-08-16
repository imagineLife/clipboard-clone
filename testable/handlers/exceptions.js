// Dependencies
const path = require('path');
const wf = require('write-file');

// Variables
const exceptionsPath = path.join(__dirname, 'uncaughtexceptions');

const exceptionsHandler = (req,res) => {
	 const errorFilePath = path.join(exceptionsPath, `${uuid()}.json`);
  const report = JSON.stringify({ ...req.body, date: new Date() });

  wf(errorFilePath, report, error => {
    if (error) return console.error('Error Saving', report);
    console.log('Exception Saved', errorFilePath, report);
  });

  response.end();
}

module.exports = { exceptionsHandler }
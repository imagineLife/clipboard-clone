const wf = require('write-file');

const crashReportHandler = (req, res) => {
	console.log('CRASH REPORT API REQUEST!!');
	const body = {
    ...req.body,
    filename: req.file.filename,
    date: new Date(),
  };
  const filePath = `${req.file.path}.json`;
  const report = JSON.stringify(body);

  wf(filePath, report, error => {
    if (error) return console.error('Error Saving', report);
    console.log('Crash Saved', filePath, report);
  });

  res.end();
}

module.exports = {
	crashReportHandler
};
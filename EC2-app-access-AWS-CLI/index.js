const http = require('http');
var awsCli = require('aws-cli-js');
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options(
  /* accessKey    */ 'ASIAQYYWBNOUIBKSWV52',
  /* secretKey    */ '5C4RU4vXhRzAyHWBA+17zMlpGvbQvRNAac+1qasW',
  /* sessionToken */ 'FwoGZXIvYXdzEIT//////////wEaDM7ob+O383Aeyv9wRSLHATujbJ6Cjb20VqjruZHSfaNv+AGHEATXEJlpEVwXq/RBGNcfjF+W8+hcPXtgunNXWq3y66GM9vI4VRrs7rVnOrqUGG+VUkaNk0WkUQ8tlMNUil2lL/r8MVL91/UkTGbSx6+EVuQB/YjtKX1fZmrzQVbZxDW9yayXsQYyJpX2NVkIa7Yzj7ZUVRFW7672ikZIksyqmsWhfyumEnijXnODcHYMWkiLtGl2Adius23O7+IaT0jdbqmlj41ZBbQ46qUIFdBIEQpsx1sot9GpjQYyLUgvVU6IdPl1CU3syn+bsFK4K8nc1/6fNk8rTEnGLLwXlXVyWIY+RlYFHzSurg==',
  /* currentWorkingDirectory */ null,
  /* cliPath */ 'aws'
);

const aws = new Aws(options);

const hostname = '0.0.0.0';
const port = 3000;

aws.command('iam list-users').then((data)=> {
  console.log('data = ', data); 
});

const server = http.createServer((req, res) => {
  
	if (req.url=="/deru"){
 aws.command('iam list-users').then((data)=>{
	res.statusCode=200;
	 res.setHeader('Content-Type', 'text/plain');
	 res.end(data.raw);
 })


 }
	else{
		res.statusCode=200;
		res.setHeader('Content-Type','text/plain');
		res.end('User /deru to access the CLI !')
	}});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require('http');
var awsCli = require('aws-cli-js');
var Options = awsCli.Options;
var Aws = awsCli.Aws;

var options = new Options(
  /* accessKey    */ 'AKIAXURMNZICEBWYBIM3',
  /* secretKey    */ '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',
  /* sessionToken */ 'IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJHMEUCIQDCvH9SRFUsuS6pA74LxHz95fucF49P1s/KR5Jxln4l/AIgPnW5c8sNljJzK4Qjey9edno5cAwKMHCpwF/xffBVfrkq9AEI9P//////////ARAAGgw1MjUxNTI5MzAzMDgiDEIxOAUPZxGBbDyq9irIAV9BK/ek865Qy11o9D+Ixk7pLpdrrfehfvAIPtbqljF8YL7kEFGDCD0j0iKW9Apvq1Ab8sF+ani6OPs6aTV5XTmlODfixmtn/A5eiA4qFviYUFvovhRPoTc7Dth1CIHSmuyziyXdyexC6yTdSXN/sEZ2C4ci1UlpN1RD2qp9q7aCwfKoSX0mHEQX4HkQWvgd25azrlUPGuSW3ePUwqyFZMuIkipLVplA7T/Jl1JIi7bgteKE6fTSWIkDDqOnCfjtl71q63LoFaSnMKrHzo0GOpgBraKiNeNwtgUTszay7//Y1MYbOZT3LUaYk9Yis1E1ONWxIAJeJpRFru4iI2hUVbZDDNUs1anvercAcp6yuNByRLUT+SZxpPe2KMJs7trU/PaW+QW+O0Qjn3OBh7wlFBxr2hyX27GNdKYM/ug1JEi1W66HCBemiC3unnfHSeVXHOQrsI90lFAlgjikeQjjCceuSYsBRJW47Qw=',
  /* currentWorkingDirectory */ null,
  /* cliPath */ 'aws'
);

const aws = new Aws(options);

const hostname = '0.0.0.0';
const port = 3000;



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

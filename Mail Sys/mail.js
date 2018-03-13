var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service : 'service_provider',
	auth : {
		user : 'YOUR_EMAIL_ADDRESS',
		pass :''
	}
});

var mailOptions = {
	from : '',
	to : '',
	subject : 'subject',
	text : 'TEXT'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error) {
		console.log(error);
	}
	else {
		console.log('Email sent: '+info.response);
	}
});

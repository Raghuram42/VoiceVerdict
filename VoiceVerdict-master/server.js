//Importing modules
var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var config=require('./config');
<<<<<<< HEAD
var mongoose=require('mongoose');

var app=express();

mongoose.connect(config.database,function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log('Connected to database');
	}
});

=======

var app=express();

>>>>>>> d1026155db9b5dce72c1f79f4d0741a54ad44cd4
//MiddleWare
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Routes
app.get('/hello',function(req,res){
	res.sendFile(__dirname +'/public/views/index.html');
});
//Setting Http port
app.listen(config.port,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('Starting Express Server');
	}
});
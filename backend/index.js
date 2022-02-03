
   
var express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

var app = express();
var port = process.env.PORT || 5000;


// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serving static files
app.use('/uploads', express.static('uploads'));

// handle storage using multer
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '../client/public/images');
	},
	filename: function (req, file, cb) {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	}
});
var upload = multer({ storage: storage });
// const multer =require("multer")
// const upload =multer({
//     dest:'public/images'
// })


// handle single file upload
app.post('/uploadfile', upload.single('dataFile'), (req, res, next) => {
	const file = req.file;
	if (!file) {
		return res.status(400).send({ message: 'Please upload a file.' });
	}
	return res.send({ message: 'File uploaded bhairu successfully.', file });
});




app.listen(port, () => {
	console.log('Server started on: ' + port);
});





// const express = require("express");

// const app = express();

// app.use(express.json());
// const multer =require("multer")
// // var cors = require('cors');
// // // app.use(cors({origin: 'http://localhost:3000'}));
// // app.use(cors())

// app.use('/uploads', express.static('uploads'));

// app.use("/auth", require("./routes/auth"));

// app.all('/*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Authorization,device_token,device_type,language,timezone');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//      cb(null, 'uploads');
//   },
//   filename: function (req, file, cb) {
//      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
// var upload = multer({ storage: storage });




// app.listen(5000, () => {
//   console.log("Listening on port 5000");
// });

const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var MeaningCloud = require('meaning-cloud')
var bodyParser = require('body-parser')
var cors = require('cors')


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

// You could call it aylienapi, or anything else
//var textapi = new MeaningCloud({
//  application_key: process.env.API_KEY,
//    endpoints: {
//    sentiment_analysis : '/sentiment-2.1'
//  }
//});

app.use(express.static('dist'))

console.log(__dirname)
console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    console.log(req.headers.formurl);  // 2-letter code, like en es fr ...

    const requestOptions = {
        method:'POST',
      body: {
          "key": process.env.API_KEY,
          "url": req.headers.formUrl,
          "lang": "en"
      },
      redirect: 'follow'
    };
    
    res.json(requestOptions); 
    console.log("Hi");
     
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})





const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect(
    "mongodb://tt:tt12345@ds157853.mlab.com:57853/tt-backend", 
    {
    useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    return res.send('Hello World');
});


app.listen(3000, () =>{
    console.log('Server started on port 3000');
});
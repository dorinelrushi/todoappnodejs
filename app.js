const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect('mongodb://localhost/dorinel',{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(db=>console.log('connect'))
.catch(err => console.log(err));

const app = express();

const router = require("./routes/router")


app.set("view engine",'ejs');


app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use('/static', express.static('static'))


app.use('/',router)

app.listen(3000,()=>{
    console.log('on port 3000')
})
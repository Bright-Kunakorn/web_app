const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;


require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLUS_URI;
mongoose.connect(url);

const connection = mongoose.connection;
app.set('view engine','ejs')
connection.once('open',() =>{
    console.log('MongoDB Database connected');
})

const infoSchema = {
    Name: String,
    OBJECT: Array,
    Date_obs: Array
}
const info = mongoose.model('info',infoSchema)
var dbo = db.db("star");
app.get('/',(req,res) =>{
    dbo.collection("info").find({}).toArray({},function(err,info){
        res.render('index',{
            info
        })
    })
    
})
app.post('/',(req,res) =>{
    var myobj = { Username: name , detail: detail };
    dbo.collection("info").insertOne({})(myobj,function(err,info){
        if (err) throw err;
        console.log("1 document inserted");
        db.close(); 
    })
    
})
app.listen(4000,() => {
    console.log('server is runing on port');
});
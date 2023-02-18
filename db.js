const mongoose = require('mongoose');
// let mongooseURL="mongodb://localhost:27017/book";

let mongooseURL=`mongodb+srv://shreeharsha:Harsha_2002@cluster0.v7nnwjt.mongodb.net/test`;

mongoose.set('strictQuery', false);   //i added see what it means

const connectToMongoose =()=>{
    mongoose.connect(mongooseURL,()=>{
        console.log("Connected to mongoose");
    })
}



module.exports = connectToMongoose;
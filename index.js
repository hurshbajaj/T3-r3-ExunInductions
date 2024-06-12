import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
//mongo database
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;

db.on('err', () => {
    console.log(err);
})
db.once('open', ()=>{
    console.log("Database connection established...");
})


import articleRoutes from './articles.js';

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/articles', articleRoutes);

app.listen(PORT, ()=> console.log("Server running on port: " , PORT));
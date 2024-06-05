import express from 'express';
import bodyParser from 'body-parser';
import articleRoutes from './articles.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {res.send("Hello from Homepage");})

app.use('/articles', articleRoutes);

app.listen(PORT, ()=> console.log("Server running on port: " , PORT));
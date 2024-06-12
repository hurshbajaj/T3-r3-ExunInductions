/*import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

//mongoDB setup

console.log(new Date().toISOString());
let articles = [
  
]


router.get('/', (req, res)=> res.send(articles));

router.post('/create', (req, res)=>{
    const article = req.body;

    const articleWID = {...article, id: uuidv4(), posted_at: new Date().toISOString(), last_updated_at: new Date().toISOString()}

    articles.push(articleWID);
    res.send(`Article Created`);
});

router.get('/:id', (req, res) => {
    
    const id = req.params.id;
    const articleFound = articles.find((article) => article.id == id);
    res.send(articleFound);
});
router.delete('/:id/delete', (req, res) => {
    const id = req.params.id;
    articles = articles.filter((article) => article.id != id);

    res.send(`Article with the given id deleted...`);
});
router.put('/:id/update', (req, res) => {
    const id = req.params.id;
    const newA = req.body;
    const oldA = articles.find((article) => article.id == id);
    const DoC = oldA.posted_at;
    
    articles = articles.filter((article) => article.id != id);
    const articleWID = {...newA, id: id,posted_at: DoC, last_updated_at: new Date().toISOString()};

    articles.push(articleWID);
    res.send(`Article with the given id updated... `);
});

//!!!for different purposes, after the ids different params are used. If these params are not used while testing, process will throw error.        During testing, name and article are the 2 keys which need to be submitted by the user.!!!


export default router;

*/ 
//Above Prototype: without the use of db.

import express from 'express'
const router = express.Router();

import articleC from './articleControllers.js'

router.get('/', articleC.index);
router.post('/find', articleC.find);
router.post('/create', articleC.create);
router.post('/update', articleC.update);
router.post('/delete', articleC.destroy);

export default router;
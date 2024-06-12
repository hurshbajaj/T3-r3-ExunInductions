import article from './articleModel.js';

// Show all articles
const index = (req, res, next) => {
    article.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: 'An error occurred /:', error });
        });
};

// Show article by id
const find = (req, res, next) => {
    let articleId = req.body.id;
    article.findById(articleId)
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: 'An error occurred /:', error });
        });
};

// Create new article
const create = (req, res, next) => {
    let newArticle = new article({
        article: req.body.article,
        posted_by: req.body.posted_by,
        posted_at: new Date().toISOString(),
        last_updated: 'not updated yet'
    });

    newArticle.save()
        .then(response => {
            res.json({ message: 'Article created!', response });
        })
        .catch(error => {
            res.json({ message: 'An error occurred /:', error });
        });
};

// Update existing article
const update = (req, res, next) => {
    let id = req.body.id;

    let updatedArticle = {
        article: req.body.article,
        posted_by: req.body.posted_by,
        posted_at: req.body.posted_at,
        last_updated: new Date().toISOString()
    };

    article.findByIdAndUpdate(id, { $set: updatedArticle }, { new: true })
        .then(response => {
            res.json({ message: 'Article updated!', response });
        })
        .catch(error => {
            res.json({ message: 'An error occurred /:', error });
        });
};

//delete one
const destroy = (req, res, next) => {
    let id = req.body.id;

    article.findByIdAndDelete(id)
    .then(response => {
        res.json({ 
            message: 'Article deleted successfully!'
        });
    })
    .catch(error => {
        res.json({ message: 'An error occurred /:', error });
    });
};


export default {
    index, find, create, update, destroy
};

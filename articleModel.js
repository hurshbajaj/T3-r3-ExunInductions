import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    article: {
        type: String,
        required: true
    },
    posted_by: {
        type: String,
        required: true
    },
    posted_at: {
        type: String
    },
    last_updated: {
        type: String
    },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
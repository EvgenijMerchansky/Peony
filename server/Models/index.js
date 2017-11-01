import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    id:          { type: Number },
    name:        { type: String },
    email:       { type: String },
    title:       { type: String },
    article:     { type: String },
    accepted:    { type: Boolean },
    description: { type: String },
});

export const Article = mongoose.model('Article', ArticleSchema);

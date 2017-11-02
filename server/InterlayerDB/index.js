import mongoose from 'mongoose';
import { Article } from '../Models';

export const connectionToDB = () => {
    mongoose.connect('mongodb://localhost/articles', {
        useMongoClient: true,
    });
};

export const createArticle = (data) => {
    const article = new Article({
        id:          data.id,
        name:        data.name,
        email:       data.email,
        title:       data.title,
        article:     data.article,
        accepted:    data.accepted,
        description: data.description,
    });

    console.warn(article, 'GENERATED ARTICLE');

    return article.save();
};

export const findAllArticles = () => {

    return Article.find({}, (err, docs) => docs);

};

export const updateArticleState = (id) => {
    Article.updateOne({id: id}, {accepted: true}, (err, doc) => {
        if (err) throw err;
    });
};

// export const publishArticle = () => {
//     return Article.find({accepted: true}, (err, doc) => {
//         console.log(doc, 'DOCS')
//     })
// };


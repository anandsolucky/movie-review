const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const reviewModel = require('../models/review')
const chalk = require('chalk');

const partialsPath = path.join(__dirname,"../templates/partials");
const viewsPath = path.join(__dirname,"../templates/views");
const publicPath = path.join(__dirname,"../public");
const port = process.env.PORT || 3000;

const app = express();
app.set('views',viewsPath);
app.set('view engine','hbs');
app.use(express.static(publicPath));
app.use(bodyparser.json());
hbs.registerPartials(partialsPath);


mongoose.connect('mongodb://max:G0tqCEpDmZpYjjoj@cluster0-shard-00-00.v3zte.mongodb.net:27017,cluster0-shard-00-01.v3zte.mongodb.net:27017,cluster0-shard-00-02.v3zte.mongodb.net:27017/UPI-DB?ssl=true&replicaSet=atlas-j031z0-shard-0&authSource=admin&retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true})
                .then(()=> console.log("connected to DB"))
                .catch((error) => console.log("failed to connect to db: " + error));



app.get('/', (req, res)=> {
    res.render('index');
})

app.get('/about', (req, res)=> {
    res.render('about');
})

app.get('/review', (req, res)=> {
    res.render('review');
})

app.post('/review', async (req, res)=> {
    const params = req.body;
    const reviewData = {
        movieName: params.movieName,
        directedBy: params.director,
        title: params.title,
        genre: params.genre,
        rating: params.rating,
        content: params.detail,
    }
    const review = new reviewModel(reviewData);
    try {
        await review.save()
        res.json({status: "success", msg: "DB data save success"});
    } catch (error) {
        res.json({status: "error", msg: "DB data save exception"});
    }
})

app.get('/search', (req, res)=> {
    res.render('search');
})

app.listen(port, ()=> {
    console.log("listening on port: " + port);
})

console.log("server js file");
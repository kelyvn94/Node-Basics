const express = require('express');
const mongoose = require('mongoose');
const blog = require('./views/models/blogs');

const app = express();

//connect to database
const mongoURL = 'mongodb+srv://programmer:pro123@node-basics.nt7atf3.mongodb.net/Node-Basics?retryWrites=true&w=majority';
mongoose.connect(mongoURL,)
.then((result) => console.log('Database connected'))
.catch((err) => console.log(err));

//create a view engine
app.set('view engine', 'ejs');

app.get('/blogs', (req, res) => {
    const blogs = new Blog({
        title: 'My first blog',
        author: 'Me',
        body: 'This is my first blog'
    });
    blogs.save()
    .then((result) => {
        res.send(result);
     })
     .catch((err) => {
        res.send(err);
     });
    });

app.get('/', (req, res) => {
    res.render('home');
})
app.use(express.static ("Public"));
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
app.get('/contact', (req, res) => {
    res.redirect('/about');
})
app.get('/contant-us', (req, res) => {
    res.redirect('/about');
})
app.get('/Portforlio', (req, res) => {
    res.redirect('/about');
})


app.use((req, res) => {
    res.status(404).render('404');
})
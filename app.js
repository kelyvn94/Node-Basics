const express = require('express');
const mongoose = require('mongoose');
const blog = require('./views/models/blogs');
const prisma = require('./db');

const app = express();

app.listen(5000,()=>{
console.log('listening')
})

//connect to database
// const mongoURL = 'mongodb+srv://programmer:pro123@node-basics.nt7atf3.mongodb.net/Node-Basics?retryWrites=true&w=majority';
// mongoose.connect(mongoURL,)
// .then((result) => console.log('Database connected'))
// .catch((err) => console.log(err));

//create a view engine
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    //res.render('home');
   

    const user=await prisma.user.findMany()
  
    res.send(user)
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
app.get('/Portfolio', (req, res) => {
    res.redirect('/about');
})


app.use((req, res) => {
    res.status(404).render('404');
})
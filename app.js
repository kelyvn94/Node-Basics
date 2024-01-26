const express = require('express');
const mongoose = require('mongoose');
const blog = require('./views/models/blogs');
const prisma = require('./views/db');

const app = express();

app.listen(5000,()=>{
console.log('listening')
})

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
    res.redirect('public/about');
})
app.get('/contact', (req, res) => {
    res.redirect('public/about');
})
app.get('/contant-us', (req, res) => {
    res.redirect('public/about');
})
app.get('/Portfolio', (req, res) => {
    res.redirect('public/about');
})


app.use((req, res) => {
    res.status(404).render('404');
})
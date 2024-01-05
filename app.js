const express = require('express');

const app = express();

//create a view engine
app.set('view engine', 'ejs')

app.listen(3001);

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
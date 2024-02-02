const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const prisma = new PrismaClient();


const Router=require('./routes/route')

const app = express();

//create a view engine
app.set('view engine', 'ejs');

app.listen(5000,()=>{
 console.log('Starting the server')
})

app.use(express.json());


async function main() {

  // Creates a new user record in the database with the provided name and email
  // const newUser = await prisma.user.create({
  //   data: { name: "Kelvin", email: "kmacharia584@gmail.com" },
  // });
  // console.log(newUser);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.use(express.static ("Public"));

app.use(Router)
// app.get('/about', (req, res) => {
//     res.render('about');
// })
// app.get('/about-us', (req, res) => {
//     res.redirect('public/about');
// })
// app.get('/contact', (req, res) => {
//     res.redirect('public/about');
// })
// app.get('/contant-us', (req, res) => {
//     res.redirect('public/about');
// })
// app.get('/Portfolio', (req, res) => {
//     res.redirect('public/about');
// })


//app.use((req, res) => {
  //  res.status(404).render('404');
//})
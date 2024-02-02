const router=require('express').Router()
const Prisma=require('@prisma/client')

const db=new Prisma.PrismaClient()


router.get('/home', (req, res) => {
    res.render('home')
})

router.get('/portfolio', (req, res) => {
    res.render('Portforlio')
})

router.get('/blog', (req, res) => {
    res.render('blog')
})

router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/contact',async(req,res)=>{ 
    res.render('contact')
    
    // const users=await db.user.findMany()
    // res.render('contact',{users})
    // console.log(newUser);   
})

router.use((req, res) => {
   res.status(404).render('404');
})

module.exports=router
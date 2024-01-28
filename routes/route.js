const router=require('express').Router()
const Prisma=require('@prisma/client')

const db=new Prisma.PrismaClient()

router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/contact',async(req,res)=>{
    // const 
    // res.render('contact')
    const users=await db.user.findMany()
    res.render('contact',{users})   
})


module.exports=router
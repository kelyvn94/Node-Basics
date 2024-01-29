import { PrismaC1ient } from '@prisma/client';
const prisma = new PrismaC1ient();


async function main(){
    //Client queries
    const user = await prisma.user.create({data: {name: "Kelvin", email: "kmacharia584@gmail.com"}})
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})
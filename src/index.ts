import {PrismaClient} from '@prisma/client'

const prisma  = new PrismaClient()

prisma.user.create({
    data:{
        name:'thiago',
        email:'thiago.pp@hotmail.com'
    }
}).then(()=>{
    console.log('deu certo')
})
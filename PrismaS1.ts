/**
 * Welcome to the Query Console! 🎉
 * Run a query by pressing the play button next to it
 * Explore the Prisma Client API by pressing `Cmd/Ctrl + Space` near any keyword.
 * Learn more: https://www.prisma.io/docs/concepts/components/prisma-client
 */

/**
 * Since this is the first time you've opened the Query Console for this project,
 * we've generated a few queries based on your schema that should get you started.
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

await prisma.user.create({
  data : {
    username : "Alex3",
    roles: "user",
    products :{create : [{
      title : "Product1",
      price : 500
    },
                        {
      title : "Product2",
      price : 200
    },{
      title : "Product3",
      price : 1200
    }]}
    
  }
})

await prisma.user.create({
  data : {
    username : "Asma",
    roles: "user",
    products :{create : [{
      title : "Product 11",
      price : 500
    },
                        {
      title : "Product 12",
      price : 200
    },{
      title : "Product 13",
      price : 1200
    }]}
    
  }, 
  select : {
    id: true,
    products : true
  }
})

await prisma.user.create({
  data : {
    username : "Anis",
    roles: "user",
    products :{create : [{
      title : "Product 111",
      price : 500
    },
                        {
      title : "Product 121",
      price : 200
    },{
      title : "Product 131",
      price : 1200
    }]}
    
  }, 
  select : {
    id: true,
    products : { select : {
            title : true

    } 
    }
  }
})


await prisma.user.create({
  data : {
    username : "Safwen",
    roles: "user",
    products :{create : [{
      title : "Product 1111",
      price : 500
    },
                        {
      title : "Product 1211",
      price : 200
    },{
      title : "Product 1311",
      price : 1200
    }]}
    
  }, 
  select : {
    id: true,
    products : { select : {
            title : true

    } , 
                where : {
                  price : { gt : 500}
                }
    }
  }
})

await prisma.user.create({
  data : {
    username : "si Anis",
    roles: "user",
    products :{create : [{
      title : "Product 1111",
      price : 500
    },
                        {
      title : "Product 1211",
      price : 200
    },{
      title : "Product 1311",
      price : 1200
    }]}
    
  }, 
  select : {
    id: true,
    products : { select : {
            title : true

    } , 
                where : {
                  price : 500
                }
    }
  }
})


await prisma.user.findMany({select : {username: true,  _count : true }})


await prisma.product.aggregate({where:{user : {some : {username : 'si Anis'}}},_sum : { price : true}})

await prisma.product.create({
  data : {
    title : "Product 4",
    user : {
      create : {
        username : "Sarah"
      
      }
    }
  }
})

await prisma.product.create({
  data : {
    title : "Product 5",
    user : {
      connect : {
        username : "Alex3"
      
      }
    }
  }
})
// Find the first 100 rows in the `User` table
await prisma.user.findMany({ take: 100 })

// Find the first 100 rows in the `User` table that match a criteria
await prisma.user.findMany({
  where: {
    "id": "example"
  },
  take: 100 
})

// Find the first 100 rows in the `User` table, but only return a few columns
await prisma.user.findMany({
  select: {
    "id": true,
    "createdAt": true
  },
  take: 100
})
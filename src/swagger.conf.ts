//importar biblioteca de  trabajo

import swaggerJSDoc from "swagger-jsdoc";

 export const swaggerOptions= {

  definition:{

    openapi:"3.0.0",
    info:{
        title:"Api de la ips AteneaIps",
        version:"1.0.0",
        description:"en esta Api tenemos las funcionalidades de la operacion de la Api AteneaIps"
    },

    servers:[{
        url:"http://localhost:3000/",
        descripcion:"servidor local de documentación",
    }]
    },

    apis: ["./src/index.ts", "./swagger/*.swagger.ts"],
};


export const swaggerSpec = swaggerJSDoc(swaggerOptions);
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const fs = require('fs');
// const path = require('path')
// // require('../routes')

// // ...
// const swaggerDefinition = JSON.parse(fs.readFileSync(path.join(__dirname, 'swaggerConfig.json'), 'utf-8'));
// const swaggerRoutes = JSON.parse(fs.readFileSync(path.join(__dirname, 'swaggerRoutes.json'), 'utf-8'));
// // var app = express();
// // const swaggerDefinition = JSON.parse(fs.readFileSync('swaggerConfig.json')); 


// const options = {
//     definition:
//     {
//         openapi: '3.0.0',
//         info: {
//             title: 'API Documentation for cornache-apps',
//             version: '1.0.0',
//             description:
//                 'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
//             license: {
//                 name: 'Licensed Under MIT',
//                 url: 'https://spdx.org/licenses/MIT.html',
//             },
//             contact: {
//                 name: 'JSONPlaceholder',
//                 url: 'https://jsonplaceholder.typicode.com',
//             },
//         },
//         servers: [
//             {
//                 url: 'http://localhost:8000',
//                 description: 'Development server',
//             },
//         ],
//     },

//     apis: ['./src/routes/*.js'],

// };

// swaggerDefinition.path = swaggerRoutes.path


// const options = {
//     definition: swaggerDefinition,
//     apis: [],
//     // Paths to files containing OpenAPI definitions
// };

// const swaggerSpec = swaggerJSDoc(options);

// module.exports = { swaggerSpec, swaggerUi }
const swaggerAutogen = require('swagger-autogen')();
 
const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost:3001',
    schemes: ['https', 'http'],
    basePath: '/api-docs'
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate swagger.json

swaggerAutogen(outputFile, endpointsFiles, doc);
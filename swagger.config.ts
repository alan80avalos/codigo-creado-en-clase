import { SwaggerOptions } from 'swagger-ui-express';

const port = process.env.PORT || 3000;

const options: SwaggerOptions = {
    //Información de la API
    SwaggerDefinitions: {
        openapi: '3.1.0',
        info: {
            title: 'API Dummy',
            descripcion: 'API para fines educativos',
            version: '0.0.1',
        },
        //Cuales son los servidores donde se encuentra la API
        servers: [
            { url: 'http://localhost:3000' }
        ]
    },
    //Rutas donde se encuentran los archivos con la documentación
    apis: [
        './src/**/*.ts' //Doble asterisco para que busque en todas las carpetas
    ]
}

export default options;
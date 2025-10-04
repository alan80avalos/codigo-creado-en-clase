import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); //Que el dotenv se ejecute antes de las rutas
import swaggerJSDoc from 'swagger-jsdoc';
import { setup, serve } from 'swagger-ui-express';
import swaggerOptions from './../swagger.config';

import dbConnect from './database';


//import database from './../database.json'

//import { setApp } from './app/auth/model';

//import authRoutes from './app/auth/routes';
//Para el archivo users:
//import userRoutes from './app/users/routes';

//Para el archivo routes.ts que junta todo:
import routes from './app/routes';

const port = process.env.PORT || 3000; // el || es para tener plab b) en caso de que el "PORT" no esté definido en el .env

const app = express();

app.use(routes)
//Para el archivo users:
//app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('api works');
});

const swaggerDocs = swaggerJSDoc(swaggerOptions);//A partir de la documentación generamos los documentos
app.use('/swaggger', serve, setup(swaggerDocs));//Esto quiere decir que cuando entremos al navegador con /swagger vamos a ver la documentación
//conectamos la base de datos mongo


//Corremos el servidor
app.listen(port, () => {
  console.log(`App is running in port ${port}`);
});
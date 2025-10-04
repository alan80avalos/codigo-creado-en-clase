import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user";

//Para agregar propiedades a un objeto ya existente en este caso a Request de express ñ)
declare global {
    namespace Express {
        interface Request {
            // "?" indica que es opcional"
            user?: IUser;
        }
    }
}  

export function authMiddleware(req: Request, res: Response, next: NextFunction) {

    // const token = req.query.token; ---> otra forma de hacerlo si solo es un parametro
    const {token} = req.query;
    if(token === '123'){
        //Parra este obheto extra que creamos en el declare global ñ)
        req.user = { 
            id: 123, 
            name: 'Alan' ,
            email: 'alan@iteso.mx'
        };
        //return next(); ------> Por si no queremos colocar un else, colocamos un return
        next();
    } else {
        //res.status(401).send({ mensaje: 'No estas loggeado' }); ---> si no queremos mandar mensaje
        res.status(401); 
    }
}
import { Router, json } from 'express';
import { login, signup } from './controller';


const router = Router();

//json no es un middleware si non una función que regresa un middleware
router.post('/login', json(), login);
router.post('/signup', signup);

export default router;
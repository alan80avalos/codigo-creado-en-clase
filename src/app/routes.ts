import { json, Router } from 'express';
import authRoutes from './auth/routes';
import userRoutes from './users/routes';

const router = Router();

router.use(json());//Se pone primero para que todas las rutas usen json como middleware
router.use('/auth', authRoutes);
router.use('/users', userRoutes);


export default router;

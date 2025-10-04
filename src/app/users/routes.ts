import { Router } from 'express';
import { getUsers } from './controller';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

/**
 * @swagger
 * /users:
 *  get:
 *   tags: [Users]
 *   description: Lista todos los usuarios
 *   parameters:
 *     - in: query
 *       name: token
 *       description: ahth user token
 *       schema:
 *          type: string
 *   responses:
 *     200:
 *   description: success
 *     401:
 *   description: missing token
 */
//El midleware es para proteger la ruta de modo que usa la función next para que continue con la ejecución de la función getUsers
router.get('', authMiddleware, getUsers);

export default router;
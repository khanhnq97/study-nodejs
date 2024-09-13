import express from 'express';
import { usersController } from '../controllers/index.js';
import { body } from 'express-validator';
const router = express.Router();

router.get('/:id', usersController.getDetailUser)
router.post('/login', body('email').isEmail(), body('password').isLength({ min: 5 }), usersController.login)
router.post('/register', usersController.register)
export default router
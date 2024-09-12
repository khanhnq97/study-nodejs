import express from 'express';
import { studentsController } from '../controllers/index.js';
const router = express.Router();
router.get('/', studentsController.getAllStundets);
router.get('/:id', studentsController.getAllStundetsById);
router.post('/insert', studentsController.insertStudent);
router.put('/edit/:id', studentsController.editStudent);
router.delete('/delete/:id', studentsController.deleteStudent);
export default router
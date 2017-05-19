import express from 'express';
import fileController from './../controllers/file.controller';

const router = express.Router();
router.get('/', fileController.load);

export default router

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authController from './../controllers/auth.controller';

dotenv.config();
const router = express.Router();

router.get('/token', authController.token);

export default router;
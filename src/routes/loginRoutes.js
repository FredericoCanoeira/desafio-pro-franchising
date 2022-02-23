import express from 'express';
import loginControllers from '../controllers/loginControllers.js';

const router = express.Router();

router.post('/', loginControllers.login);

export default router;

import express from 'express';
import clientController from '../controllers/clientControllers.js';

const router = express.Router();

router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClient);
router.put('/:id', clientController.updateClients);
router.delete('/:id', clientController.deleteClients);



export default router;

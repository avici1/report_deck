import { Router } from 'express';
import staffController from '../controllers/staffController';

const router = Router();

router.get('/',staffController.getListStaff);
router.post('/',staffController.AddNewStaff);
router.get('/:id',staffController.searchStaff);
router.put('/:id',staffController.updateStaff);
router.delete('/:id',staffController.deleteStaff);

export default router;
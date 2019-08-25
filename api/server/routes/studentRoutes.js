import studentC from '../controllers/studentController';
import { Router } from 'express';

const router = Router();
router.get('/',studentC.getAll);
router.post('/',studentC.adder);
router.get('/:id',studentC.getParticular);
router.delete('/:id',studentC.deleter);
router.put('/:id',studentC.updater);
export default router;
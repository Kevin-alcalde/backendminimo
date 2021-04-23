import {Router} from 'express';
import {getAllCasos,createCaso,updateCaso} from '../controllers/caso.controllers'
const router = Router ();

router.get('/all', getAllCasos);
router.post('/create', createCaso);
router.put('/update/:id', updateCaso);

export default router;
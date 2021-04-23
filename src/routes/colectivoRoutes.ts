import {Router} from 'express'
import {getAllColectivos,createColectivo,deleteColectivo} from '../controllers/colectivo.controllers'

const router = Router();

router.get('/all', getAllColectivos);
router.post('/create', createColectivo);
router.delete('/delete/:id',deleteColectivo);

export default router;

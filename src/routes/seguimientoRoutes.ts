import {Router} from 'express'
import { getSeguimiento, createSeguimientos, updateSeguimiento} from '../controllers/seguimiento.controllers';

const router = Router ();

router.get('/all',getSeguimiento);
router.post('/create', createSeguimientos);
router.post('/update', updateSeguimiento);

export default router;
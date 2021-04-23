import { Request, Response } from 'express'
import { userInfo } from 'node:os';
import Caso from '../models/caso'
import seguimiento from '../models/seguimiento';

//Modelos
import Seguimiento, {ISeguimiento} from '../models/seguimiento'


//tener todos los Seguimientos de un caso
export async function getSeguimiento(req: Request, res: Response): Promise<Response> {
    const seguimientos = await Seguimiento.find();
    return res.status(200).json(seguimientos);
};

//crear un seguimiento
export async function createSeguimientos(req: Request, res:Response): Promise<Response> {
    const {nombre, fecha_seguimiento, dni, telefono, fiebre, tos, dificultad_respiratoria, malestar_general, id } = req.body;
   
    const newSeguimiento: ISeguimiento = new Seguimiento({
        nombre,
        fecha_seguimiento,
        dni,
        telefono,
        fiebre,
        tos,
        dificultad_respiratoria,
        malestar_general,
        id,
        

    });
   req.casoId = id;

    const savedSeguimiento = await newSeguimiento.save();
    await Caso.findOneAndUpdate({_id: req.casoId},{$push: {seguimientos: savedSeguimiento}});
    
    return res.status(200).json(savedSeguimiento
    );

};

//actualizar seguimiento
export async function updateSeguimiento (req: Request, res: Response) : Promise<Response> {
const { id } = req.params;
const {nombre, fecha_seguimiento, dni, telefono, fiebre, tos, dificultad_respiratoria, malestar_general} = req.body;
const updateSeguimiento = await Seguimiento.findByIdAndUpdate(
    id, {
        nombre,
        fecha_seguimiento, 
        dni, 
        telefono, 
        fiebre, 
        tos, 
        dificultad_respiratoria, 
        malestar_general
    }
);
return res.json({
    message: 'actualización realizada',
    updateSeguimiento
})
};

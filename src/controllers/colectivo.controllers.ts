import { Request, Response } from 'express';
import caso from '../models/caso';
import colectivo from '../models/colectivo';
import Colectivo , {IColectivo} from '../models/colectivo';

//dar todos los colectivos
export const getAllColectivos = async (req:Request, res:Response) => {
    const casos = await colectivo.find();
    return res.json(casos);
    
    };

//crear colectivo
    export const createColectivo = async (req: Request, res:Response) => {
        console.log(req.body);
        const {nombre, descripcion, vacuna} = req.body;
    
    const newColectivo: IColectivo = new Colectivo ({
    
        nombre, 
       descripcion,
       vacuna,

    });
 const savedColectivo = await newColectivo.save();

 return res.json(savedColectivo);
} 

//eliminar colectivo
export async function deleteColectivo(req:Request, res:Response): Promise<Response> {
    const {id} = req.params;
    await Colectivo.findByIdAndDelete(id);
    return res.json({status:'Eliminado'})
};

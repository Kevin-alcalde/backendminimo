import { Request, Response } from 'express'
import caso from '../models/caso';
import Caso , {ICaso} from '../models/caso'

export const getAllCasos = async (req:Request, res:Response) => {
const casos = await Caso.find().populate('seguimientos');
return res.json(casos);

};

//crear caso
export const createCaso = async (req: Request, res:Response) => {
    console.log(req.body);
    const {nombre, apellidos,identificador,fecha_nacimiento,genero,clasificacion,Seguimientos} = req.body;

const newCaso: ICaso = new Caso ({

    nombre, 
    apellidos,
    identificador,
    
    genero,
    clasificacion,
    seguimientos: []

});

const savedCaso = await newCaso.save();

return res.json(savedCaso);
};

export async function updateCaso(req: Request, res: Response): Promise<Response> {
  const {id} = req.params;
  const caso = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
     
      genero: req.body.genero,
      clasificacion: req.body.clasificacion
  };
 await Caso.findByIdAndUpdate(id, {$set: caso},{new:true});

 return  res.json({status:'Caso actualizado'});

}



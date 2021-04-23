import { Schema, model, Document } from 'mongoose'
import {ISeguimiento} from './seguimiento';


const colectivoSchema = new Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    
    vacuna : {
        type: String,
    }
    

},
{
    versionKey: false,
    timestamps: true
}); 

export interface IColectivo extends Document {
    nombre: string;
    descripcion: string;
    vacuna: string;
    
}

export default model<IColectivo>('Colectivo', colectivoSchema); 

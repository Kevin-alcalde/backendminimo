import { Schema, model, Document } from 'mongoose'
import {ICaso} from './caso';
const seguimientoSchema = new Schema({
    nombre: {
        type: String,
    },
    fecha_seguimiento: {
        type: Date,
    },
    dni: {
        type: String,
    },
    telefono: {
        type: String,
    },
    fiebre: {
        type: String,
    },
    tos: {
        type: String,
    },
    dificultad_respiratoria: {
        type: String,
    },
    malestar_general: {
        type: String,
    },
    caso: {
        type:Schema.Types.ObjectId,
        ref: 'Caso'
    }
},
{
    versionKey: false,
    timestamps: true
}); 

export interface ISeguimiento extends Document {
    nombre: string;
    fecha_seguimiento: Date;
    dni: string;
    telefono:string;
    fiebre: string;
    tos: string;
    dificultad_respiratoria: string;
    malestar_general: string;
    caso: ICaso;

}

export default model<ISeguimiento>('Seguimiento', seguimientoSchema); 


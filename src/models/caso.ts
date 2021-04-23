import { Schema, model, Document } from 'mongoose'
import { isDate } from 'node:util';
import {ISeguimiento} from './seguimiento';


const casoSchema = new Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    
    genero : {
        type: String,
    },
    clasificacion: {
        type: String,
    },
    seguimientos: [
        {
            type: Schema.Types.ObjectId,
            ref:'Seguimiento'

        },
    ],

},
{
    versionKey: false,
    timestamps: true
}); 

export interface ICaso extends Document {
    nombre: string;
    apellidos: string;
    

    genero: string;
    clasificación: string;
    seguimientos: Array<ISeguimiento>;
}

export default model<ICaso>('Caso', casoSchema); 


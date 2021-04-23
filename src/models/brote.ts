import { Schema, model, Document } from 'mongoose'

const casoSchema = new Schema({
    nombre: {
        type: String,
    },
    fecha_inicio: {
        type: Date,
    },
    fecha_final: {
        type: Date,
    }
},
{
    versionKey: false,
    timestamps: true
}); 

export interface ICaso extends Document {
    nombre: string;
    fecha_inicio: Date;
    fecha_final:Date;

}

export default model<ICaso>('Caso', casoSchema); 


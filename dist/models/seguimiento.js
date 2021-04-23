"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var seguimientoSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Caso'
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Seguimiento', seguimientoSchema);

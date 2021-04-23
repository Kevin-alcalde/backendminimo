"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var casoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    genero: {
        type: String,
    },
    clasificacion: {
        type: String,
    },
    seguimientos: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Seguimiento'
        },
    ],
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Caso', casoSchema);

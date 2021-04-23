"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var casoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    fecha_inicio: {
        type: Date,
    },
    fecha_final: {
        type: Date,
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Caso', casoSchema);

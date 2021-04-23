"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var colectivoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    vacuna: {
        type: String,
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.model('Colectivo', colectivoSchema);

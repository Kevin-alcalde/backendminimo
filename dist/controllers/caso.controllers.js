"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCaso = exports.createCaso = exports.getAllCasos = void 0;
var caso_1 = __importDefault(require("../models/caso"));
var getAllCasos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var casos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, caso_1.default.find().populate('seguimientos')];
            case 1:
                casos = _a.sent();
                return [2 /*return*/, res.json(casos)];
        }
    });
}); };
exports.getAllCasos = getAllCasos;
//crear caso
var createCaso = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, apellidos, identificador, fecha_nacimiento, genero, clasificacion, Seguimientos, newCaso, savedCaso;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.body, nombre = _a.nombre, apellidos = _a.apellidos, identificador = _a.identificador, fecha_nacimiento = _a.fecha_nacimiento, genero = _a.genero, clasificacion = _a.clasificacion, Seguimientos = _a.Seguimientos;
                newCaso = new caso_1.default({
                    nombre: nombre,
                    apellidos: apellidos,
                    identificador: identificador,
                    genero: genero,
                    clasificacion: clasificacion,
                    seguimientos: []
                });
                return [4 /*yield*/, newCaso.save()];
            case 1:
                savedCaso = _b.sent();
                return [2 /*return*/, res.json(savedCaso)];
        }
    });
}); };
exports.createCaso = createCaso;
function updateCaso(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, caso;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    caso = {
                        nombre: req.body.nombre,
                        apellidos: req.body.apellidos,
                        genero: req.body.genero,
                        clasificacion: req.body.clasificacion
                    };
                    return [4 /*yield*/, caso_1.default.findByIdAndUpdate(id, { $set: caso }, { new: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, res.json({ status: 'Caso actualizado' })];
            }
        });
    });
}
exports.updateCaso = updateCaso;

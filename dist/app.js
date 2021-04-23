"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var casoRoutes_1 = __importDefault(require("./routes/casoRoutes"));
var seguimientoRoutes_1 = __importDefault(require("./routes/seguimientoRoutes"));
var colectivoRoutes_1 = __importDefault(require("./routes/colectivoRoutes"));
//inialización 
var app = express_1.default();
//configuraciones 
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
//routes
app.use('/caso', casoRoutes_1.default);
app.use('/seguimiento', seguimientoRoutes_1.default);
app.use('/colectivos', colectivoRoutes_1.default);
exports.default = app;

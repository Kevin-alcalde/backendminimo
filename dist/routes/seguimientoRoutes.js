"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var seguimiento_controllers_1 = require("../controllers/seguimiento.controllers");
var router = express_1.Router();
router.get('/all', seguimiento_controllers_1.getSeguimiento);
router.post('/create', seguimiento_controllers_1.createSeguimientos);
router.post('/update', seguimiento_controllers_1.updateSeguimiento);
exports.default = router;

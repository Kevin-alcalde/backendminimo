"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var colectivo_controllers_1 = require("../controllers/colectivo.controllers");
var router = express_1.Router();
router.get('/all', colectivo_controllers_1.getAllColectivos);
router.post('/create', colectivo_controllers_1.createColectivo);
router.delete('/delete/:id', colectivo_controllers_1.deleteColectivo);
exports.default = router;

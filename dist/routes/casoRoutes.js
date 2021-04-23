"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var caso_controllers_1 = require("../controllers/caso.controllers");
var router = express_1.Router();
router.get('/all', caso_controllers_1.getAllCasos);
router.post('/create', caso_controllers_1.createCaso);
router.put('/update/:id', caso_controllers_1.updateCaso);
exports.default = router;

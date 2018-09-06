"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
const attributes = {
    nom_usuario: { type: sequelize_1.default.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: sequelize_1.default.STRING,
    nombre: sequelize_1.default.STRING,
    telefono: sequelize_1.default.STRING,
    direccion: sequelize_1.default.STRING,
    foto: sequelize_1.default.STRING,
};
exports.UsuariosModel = _1.sequelize.define('usuario', attributes);
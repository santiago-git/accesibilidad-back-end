"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const doctor_1 = require("./doctor");
const medical_center_1 = require("./medical-center");
let DoctorMedicalCenter = class DoctorMedicalCenter extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DoctorMedicalCenter.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_1.Doctor),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DoctorMedicalCenter.prototype, "doctor_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => medical_center_1.MedicalCenter),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], DoctorMedicalCenter.prototype, "medical_center_id", void 0);
DoctorMedicalCenter = __decorate([
    sequelize_typescript_1.Table({ modelName: 'doctor_medical_center' })
], DoctorMedicalCenter);
exports.DoctorMedicalCenter = DoctorMedicalCenter;
//# sourceMappingURL=doctor-medical.center.js.map
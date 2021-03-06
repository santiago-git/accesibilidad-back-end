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
const doctor_medical_center_1 = require("./doctor-medical.center");
const medical_emergency_1 = require("./medical-emergency");
let MedicalCenter = class MedicalCenter extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.HasMany(() => doctor_medical_center_1.DoctorMedicalCenter),
    __metadata("design:type", Array)
], MedicalCenter.prototype, "doctorMedicalCenters", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => medical_emergency_1.MedicalEmergency),
    __metadata("design:type", Array)
], MedicalCenter.prototype, "medicalEmergencies", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MedicalCenter.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalCenter.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], MedicalCenter.prototype, "coordLat", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], MedicalCenter.prototype, "coordLong", void 0);
MedicalCenter = __decorate([
    sequelize_typescript_1.Table({ modelName: 'medical_center' })
], MedicalCenter);
exports.MedicalCenter = MedicalCenter;
//# sourceMappingURL=medical-center.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const medical_center_1 = require("../models/medical-center");
const medical_emergency_1 = require("../models/medical-emergency");
class MedicalCenterIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return medical_center_1.MedicalCenter.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    get(id) {
        return medical_center_1.MedicalCenter.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    getWithEmergencies(id) {
        return medical_center_1.MedicalCenter.findByPk(id, {
            include: [
                { model: medical_emergency_1.MedicalEmergency },
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    create(medicalEmergency) {
        return medical_center_1.MedicalCenter.create(medicalEmergency).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    update(medicalEmergency) {
        return medical_center_1.MedicalCenter.update(medicalEmergency, { where: { id: medicalEmergency.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    delete(id) {
        return medical_center_1.MedicalCenter.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha podido eliminar el registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
}
exports.MedicalCenterIm = MedicalCenterIm;
//# sourceMappingURL=medicalCenterIm.js.map
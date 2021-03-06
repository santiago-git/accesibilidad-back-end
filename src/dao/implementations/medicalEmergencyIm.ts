import { ServerResponse } from "./server-response";
import { MedicalEmergency } from "../models/medical-emergency";
import { Patient } from "../models/patient";
import { MedicalCenter } from "../models/medical-center";

export class MedicalEmergencyIm {

    constructor() { }

    private serverResponse = new ServerResponse;

    getAll() {
        return MedicalEmergency.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                { model: Patient }
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    get(id: number) {
        return MedicalEmergency.findByPk(id, {
            include: [
                { model: Patient },
                { model: MedicalCenter },
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    getByMedicalCenter(medicalCenterId: number) {
        return MedicalEmergency.findAll({
            where: { medical_center_id: medicalCenterId },
            include: [
                { model: Patient },
            ],
            order: [['createdAt', 'DESC']]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    getByPatientId(patientId: number) {
        return MedicalEmergency.findAll({
            order: [['createdAt', 'DESC']],
            where: { patient_id: patientId },
            include: [
                { model: MedicalCenter },
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    create(medicalEmergency: MedicalEmergency, io: SocketIO.Server) {
        return MedicalEmergency.create(medicalEmergency, {
            include: [
                { model: Patient }
            ]
        }).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            io.emit('medicalEmergencyCreated', response)
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    update(patient: MedicalEmergency) {
        return MedicalEmergency.update(patient, { where: { id: patient.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    delete(id: number) {
        return MedicalEmergency.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

}


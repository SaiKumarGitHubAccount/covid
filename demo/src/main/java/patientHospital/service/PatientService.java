package patientHospital.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import patientHospital.Entity.Patient;
import patientHospital.repository.PatientRepository;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
    }

    public void addPatient(Patient patient) {
        patientRepository.save(patient);
    }

    public void updatePatient(Long id, Patient updatedPatient) {
        Patient existingPatient = patientRepository.findById(id).orElse(null);
        if (existingPatient != null) {
            existingPatient.setName(updatedPatient.getName());
            existingPatient.setCovidPositive(updatedPatient.isCovidPositive());
            // Update other fields as needed

            patientRepository.save(existingPatient);
        }
    }

    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }
}

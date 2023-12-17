package patientHospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import patientHospital.Entity.Patient;

// PatientRepository.java
public interface PatientRepository extends JpaRepository<Patient, Long> {
    // additional methods if needed
}

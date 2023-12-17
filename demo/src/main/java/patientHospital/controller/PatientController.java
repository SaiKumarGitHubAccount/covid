package patientHospital.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import patientHospital.Entity.Patient;
import patientHospital.service.PatientService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Get all patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // Get a specific patient by ID
    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        Patient patient = patientService.getPatientById(id);
        return patient != null
                ? new ResponseEntity<>(patient, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new patient
    @PostMapping
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        patientService.addPatient(patient);
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }

    // Update an existing patient
    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        patientService.updatePatient(id, updatedPatient);
        return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
    }

    // Delete a patient by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

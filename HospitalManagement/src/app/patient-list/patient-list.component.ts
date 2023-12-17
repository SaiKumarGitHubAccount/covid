// patient-list.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientServiceService } from '../patient.service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  patientForm: FormGroup;

  constructor(private PatientServiceService: PatientServiceService, private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, Validators.required],
      covidPositive: [false], // Initialize with the default value
      // Add more form controls as needed
      // Add more form controls as needed
    });
  }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.PatientServiceService.getPatients().subscribe(
      (patients) => {
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }

  addPatient(): void {
    this.PatientServiceService.addPatient(this.patientForm.value).subscribe(
      (patient) => {
        this.patients.push(patient);
        this.patientForm.reset();
      },
      (error) => {
        console.error('Error adding patient', error);
      }
    );
  }

  updatePatient(id: number): void {
    const updatedPatient = this.patientForm.value;
    this.PatientServiceService.updatePatient(id, updatedPatient).subscribe(
      () => {
        const index = this.patients.findIndex((patient) => patient.id === id);
        if (index !== -1) {
          this.patients[index] = updatedPatient;
        }
        this.patientForm.reset();
      },
      (error) => {
        console.error('Error updating patient', error);
      }
    );
  }

  deletePatient(id: number): void {
    this.PatientServiceService.deletePatient(id).subscribe(
      () => {
        this.patients = this.patients.filter((patient) => patient.id !== id);
      },
      (error) => {
        console.error('Error deleting patient', error);
      }
    );
  }

  loadPatient(id: number): void {
    this.PatientServiceService.getPatientById(id).subscribe(
      (patient) => {
        this.patientForm.patchValue(patient);
      },
      (error) => {
        console.error('Error fetching patient', error);
      }
    );
  }
}

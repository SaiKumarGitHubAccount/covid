// patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private apiUrl = 'http://localhost:8080/api/patients';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
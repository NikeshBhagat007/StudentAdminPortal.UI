import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.model';
import { UpdateStudentRequest } from '../Models/api-models/UpdateStudentRequest';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44335';
  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/Students');
  }

  getIdWiseStudent(studentId: string): Observable<Student> {
    return this.httpClient.get<Student>(this.baseApiUrl + '/Students/' + studentId)
  }

  updateStudent(studentId: string,StudentRequest: Student): Observable<Student>{
    const updateStudentRequest: UpdateStudentRequest = {
      firstName:StudentRequest.firstName,
      lastName:StudentRequest.lastName,
      dateOfBirth:StudentRequest.dateOfBirth,
      email:StudentRequest.email,
      mobile:StudentRequest.mobile,
      genderId:StudentRequest.genderId,
      physicalAddress:StudentRequest.address.physicalAddress,
      postalAddress:StudentRequest.address.postalAddress
    }

    return this.httpClient.put<Student>(this.baseApiUrl + '/students/' + studentId,updateStudentRequest);
  }
}

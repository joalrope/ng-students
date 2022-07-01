import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private _urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const apiUrl: string = `${this._urlBase}/student`;

    return this.http.get<Student[]>(apiUrl);
  }

  getStudent(id: number): Observable<Student> {
    const apiUrl: string = `${this._urlBase}/student/${id}`;

    return this.http.get<Student>(apiUrl);
  }
}

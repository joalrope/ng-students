import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    const params = new HttpParams().set('page', 1).set('limit', 10);

    return this.http.get<Student[]>(apiUrl, { params });
  }
  getStudentsByPage(page: string, limit: string): Observable<Student[]> {
    const apiUrl: string = `${this._urlBase}/student/page/${page}/limit/${limit}`;

    return this.http.get<Student[]>(apiUrl);
  }

  getStudent(id: number): Observable<Student> {
    const apiUrl: string = `${this._urlBase}/student/${id}`;

    return this.http.get<Student>(apiUrl);
  }
}

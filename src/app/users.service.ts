import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/getAll`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data);
  }

  updateData(data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/update`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GenericService<T> {
  getAllData?(): Observable<T[]>;
  get(id: number): Observable<T>;
  create(task: T): Observable<T>;
  deleteTask(id: number): Observable<T>;
  updateTask(task: T): Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  static API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllData(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${ApiService.API_URL}/${path}`);
  }
  get(path: string, id: number): Observable<T> {
    return this.http.get<T>(`${ApiService.API_URL}/${path}/${id}`);
  }
  create(path: string, task: Partial<T>): Observable<T> {
    return this.http.post<T>(`${ApiService.API_URL}/${path}`, task);
  }
  deleteTask(path: string, id: number): Observable<T> {
    return this.http.delete<T>(`${ApiService.API_URL}/${path}/${id}`);
  }
  updateTask(path: string, id: number, task: T): Observable<any> {
    return this.http.put(`${ApiService.API_URL}/${path}/${id}`, task);
  }
}

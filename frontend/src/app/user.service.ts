import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(email: string): Observable<any> {
    return this.http.get(`/api/users/${email}/`);
  }

  registerUser(email: string): Observable<any> {
    return this.http.post(`/api/users/`, { email: email });
  }

  updateUserInfo(email: string, data: any): Observable<any> {
    return this.http.put(`/api/users/${email}/`, data);
  }
}

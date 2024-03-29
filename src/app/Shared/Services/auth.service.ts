import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(user: User):Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user);
  }
}

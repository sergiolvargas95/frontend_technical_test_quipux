import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl = 'http://localhost:8080/api/v1/lists';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const token = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      Authorization: `Basic ${token}`
    });

    return this.http.get(this.baseUrl, { headers }).pipe(
      tap(() => {
        sessionStorage.setItem('auth', token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth');
  }

  getAuthHeader(): string {
    const token = sessionStorage.getItem('auth');
    return token ? `Basic ${token}` : '';
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth');
  }
}

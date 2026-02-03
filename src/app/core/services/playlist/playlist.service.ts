import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private baseUrl = 'http://localhost:8080/api/v1/lists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.baseUrl);
  }

  create(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(this.baseUrl, playlist);
  }

  delete(name: string) {
    return this.http.delete(`${this.baseUrl}/${encodeURIComponent(name)}`);
  }

  getByName(name: string) {
    return this.http.get(`${this.baseUrl}/${encodeURIComponent(name)}`);
  }


}

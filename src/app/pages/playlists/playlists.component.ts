import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/core/models/playlist.model';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  loading = false;
  error = '';
  searchTerm = '';
  selectedPlaylist: any = null;
  loadingDetail = false;
  errorDelete = '';

  newPlaylist: Playlist = {
    name: '',
    description: '',
    songs: []
  };

  constructor(
  private service: PlaylistService,
  private authService: AuthService,
  private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe({
      next: data => this.playlists = data,
      error: () => this.error = 'Error al cargar las playlists'
    });
  }

  addSong(): void {
    this.newPlaylist.songs.push({
      title: '',
      artist: '',
      album: '',
      releaseYear: '',
      genre: ''
    });
  }

  create(): void {
    this.loading = true;
    this.error = '';

    this.service.create(this.newPlaylist).subscribe({
      next: () => {
        this.newPlaylist = {
          name: '',
          description: '',
          songs: []
        };

        this.load();
        this.loading = false;
      },
      error: err => {
        this.loading = false;

        if (err.status === 403) {
          this.error = 'No tienes permisos para crear playlists';
        } else {
          this.error = 'Error al crear la playlist';
        }
      }
    });
  }

  deletePlaylist(name: string): void {
    if (!confirm(`¿Seguro que deseas eliminar la playlist "${name}"?`)) {
      return;
    }

    this.error = '';

    this.service.delete(name).subscribe({
      next: () => {
        this.playlists = this.playlists.filter(p => p.name !== name);
      },
      error: err => {
        if (err.status === 403) {
          this.errorDelete = 'No tienes permisos para eliminar playlists';
        } else if (err.status === 404) {
          this.errorDelete = 'La playlist no existe';
        } else {
          this.errorDelete = 'Error al eliminar la playlist';
        }
      }
    });
  }

    viewDetail(name: string): void {
    this.loadingDetail = true;
    this.selectedPlaylist = null;

    this.service.getByName(name).subscribe({
      next: playlist => {
        this.selectedPlaylist = playlist;
        this.loadingDetail = false;
      },
      error: () => {
        this.loadingDetail = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from 'src/app/core/services/playlist/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent{
  playlist: any;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PlaylistService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if (name) {
      this.service.getByName(name).subscribe({
        next: data => this.playlist = data,
        error: () => this.error = 'No se pudo cargar la playlist'
      });
    }
  }

  back() {
    this.router.navigate(['/playlists']);
  }
}

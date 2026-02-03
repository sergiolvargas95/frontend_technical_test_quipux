import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistDetailComponent } from './pages/playlist-detail/playlist-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlists/:name', component: PlaylistDetailComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

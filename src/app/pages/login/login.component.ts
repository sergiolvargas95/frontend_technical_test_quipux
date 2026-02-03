import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    username = '';
    password = '';
    error = '';

    constructor(
      private auth: AuthService,
      private router: Router
    ) {}

   login() {
    this.error = '';

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/playlists']);
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }

}

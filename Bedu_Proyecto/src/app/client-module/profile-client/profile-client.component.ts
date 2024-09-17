import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-client.component.html',
  styleUrl: './profile-client.component.css'
})
export class ProfileClientComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.user = {
      name: '',
      email: '',
      password: ''
    };
  }

  onSubmit() {
    console.log('Datos del usuario actualizados:', this.user);
    this.router.navigate(['/client/home-client']);
  }

}

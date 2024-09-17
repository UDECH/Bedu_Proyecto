import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-client',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header-client.component.html',
  styleUrl: './header-client.component.css'
})
export class HeaderClientComponent {

}

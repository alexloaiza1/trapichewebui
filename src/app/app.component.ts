import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Importar RouterLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Añadir RouterLink aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gestiontrapiche';
}

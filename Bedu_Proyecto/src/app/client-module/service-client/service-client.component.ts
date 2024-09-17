import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Servicio {
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-service-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-client.component.html',
  styleUrl: './service-client.component.css'
})
export class ServiceClientComponent {
  servicios: Servicio[] = [
    {
      nombre: 'Mudanza',
      descripcion: 'Transporte de los enseres, mobiliario, utensilios domésticos y demás artículos que necesites trasladar, así como los trabajos de carga y descarga.',
      imagen: 'https://mudandote.mx/wp-content/uploads/2021/11/Mudanza.jpg'
    },
    {
      nombre: 'Material de Construccion',
      descripcion: 'Transporte de material de construccion en tiempo y con los cuidados correspondientes para evitar perdidas.',
      imagen: 'https://previews.123rf.com/images/lightkeeper/lightkeeper1109/lightkeeper110900027/10539717-materiales-b%C3%A1sicos-de-construcci%C3%B3n-collage-con-mezcladora-de-cemento-en-el-centro.jpg'
    },
    {
      nombre: 'Carga Variada',
      descripcion: 'Transporte de carga variada todo tipo que se desee transportar en el tiempo estipulado.',
      imagen: 'https://www.bolipuertos.gob.ve/wp-content/uploads/2021/06/47419WhatsApp-Image-2021-05-05-at-4.29.22-PM-2.jpeg'
    },
  ]
}

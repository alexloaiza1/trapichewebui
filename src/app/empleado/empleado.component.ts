import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Empleado {
  ID: number;
  Nombre: string;
  CargoID: number;
  Salario: number | null;
  fechaIngreso: string;
  fechaSalida: string | null;
  TrapicheID: number | null;
  NombreCargo: string;
  NombreTrapiche: string;
}

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleados = [
      {
        ID: 1,
        Nombre: 'Juan Perez',
        CargoID: 1,
        Salario: 30000,
        fechaIngreso: '2023-01-15',
        fechaSalida: null,
        TrapicheID: 1,
        NombreCargo: 'Supervisor',
        NombreTrapiche: 'Trapiche El Progreso',
      },
      {
        ID: 2,
        Nombre: 'Maria Lopez',
        CargoID: 2,
        Salario: 35000,
        fechaIngreso: '2022-05-20',
        fechaSalida: '2024-12-31',
        TrapicheID: 1,
        NombreCargo: 'Contadora',
        NombreTrapiche: 'Trapiche El Progreso',
      },
      {
        ID: 3,
        Nombre: 'Carlos Garcia',
        CargoID: 1,
        Salario: 32000,
        fechaIngreso: '2024-03-10',
        fechaSalida: null,
        TrapicheID: 2,
        NombreCargo: 'Supervisor',
        NombreTrapiche: 'Trapiche La Esperanza',
      },
    ];
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro.html',
  styleUrl: './filtro.css'
})
export class Filtro {

  countries: any[] = [];
  loading = false;
  error = '';

  private token = 'rc_live_c1927eacbb7e429f8b03fdf399913dff';

  constructor(private http: HttpClient) {}

  filterByRegion(region: string): void {

    console.log('REGIÓN SELECCIONADA:', region);

    // 🔴 RESET TOTAL SIEMPRE
    this.countries = [];
    this.error = '';
    this.loading = true;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json'
    });

    const url = `https://api.restcountries.com/countries/v5?region=${region}&limit=50`;

    console.log('URL:', url);

    this.http.get<any>(url, { headers }).subscribe({

      next: (res) => {

        console.log('RESPUESTA:', res);

        const data = res?.data?.objects;

        if (!data || !Array.isArray(data)) {
          this.error = 'No se encontraron países';
          this.loading = false;
          return;
        }

        this.countries = [...data]; // 🔥 IMPORTANTE: nueva referencia
        this.loading = false;

        console.log('PAÍSES CARGADOS:', this.countries.length);
      },

      error: (err) => {
        console.log('ERROR:', err);
        this.error = 'Error al cargar países';
        this.loading = false;
      }

    });
  }
}
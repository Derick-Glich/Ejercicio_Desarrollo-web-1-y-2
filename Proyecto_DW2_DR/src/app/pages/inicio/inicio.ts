import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit {

  countries: any[] = [];
  loading = false;
  error = '';

  private token = 'rc_live_c1927eacbb7e429f8b03fdf399913dff';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {

    this.loading = true;
    this.error = '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json'
    });

    const url = 'https://api.restcountries.com/countries/v5?limit=20';

    this.http.get<any>(url, { headers }).subscribe({

      next: (res) => {

        const data = res?.data?.objects;

        if (!Array.isArray(data)) {
          this.error = 'API inválida';
          this.loading = false;
          return;
        }

        // IMPORTANTE: referencia nueva
        this.countries = data.slice(0, 20);

        this.loading = false;

      },

      error: (err) => {

        console.log(err);
        this.error = 'Error cargando países';
        this.loading = false;

      }

    });

  }

}
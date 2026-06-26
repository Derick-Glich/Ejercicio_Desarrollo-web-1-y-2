import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //revisar esta parte

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css'
})
export class Busqueda {
  countryName: string = '';
  country: any = null;
  loading: boolean = false;
  error: string = '';

  //la llave de la API por separado
  private token = 'rc_live_c1927eacbb7e429f8b03fdf399913dff';
  constructor(private http: HttpClient) {}

  searchCountry(): void {

    const query = this.countryName.trim().toLowerCase();
    //intento de reset
    if (!query) {
      this.country = null;
      this.error = '';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';
    this.country = null;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json'
    });

    const url = `https://api.restcountries.com/countries/v5?q=${query}&limit=1`;

    this.http.get<any>(url, { headers }).subscribe({

      next: (res) => {

        this.loading = false;

        const result = res?.data?.objects?.[0];

        if (result) {
          this.country = result;
        } else {
          this.error = 'País no encontrado';
        }

      },

    });
  }
}
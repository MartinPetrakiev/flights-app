import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Flight } from 'src/app/shared/models/flight.model';


const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${API_URL}flights/query/${orig}/${dest}`);
  }
  getFlightByFlightNumber(number: number): Observable<any> {
    return this.http.get(`${API_URL}flights/flightnum/${number}`);
  }

  postFlight(flight: Flight): Observable<any> {
    return this.http.post(`${API_URL}flights/create`, flight, { withCredentials: true });
  }

  getAllFlightsData(): Observable<any> {
    return this.http.get(`${API_URL}flights/`);
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`${API_URL}flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${API_URL}flights/cities/destinations`);
  }

  updateFlight(flight: Flight) {
    return this.http.patch(`${API_URL}flights/${flight._id}/update`, flight, { withCredentials: true });
  }

  deleteFlight(id: string) {
    return this.http.delete(`${API_URL}flights/${id}/delete`);
  }
}

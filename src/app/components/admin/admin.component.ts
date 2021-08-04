import { Component } from '@angular/core';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {
  id: string;
  origin: string;
  destination: string;
  flightNumber: number;
  depart: string;
  arrive: string;
  nonstop: boolean = false;
  flightList: any[];


  constructor(private flightService: FlightsService) {
    this.id = '';
    this.origin = '';
    this.destination = '';
    this.flightNumber = 0;
    this.depart = '';
    this.arrive = '';
    this.nonstop = false;
    this.flightList = [];
  }
  toggleNonStop() {
    this.nonstop = !this.nonstop;
  }

  sendFlight() {
    const flight: Flight = {
      id: this.id,
      origin: this.origin,
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight);

  }

}

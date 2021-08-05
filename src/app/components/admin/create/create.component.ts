import { Component } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

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

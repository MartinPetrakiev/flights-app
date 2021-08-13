import { Component, OnInit } from '@angular/core';
import { Flight } from '../../shared/models/flight.model';
import { FlightsService } from '../../shared/flights-service/flights.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponet implements OnInit {

  flights: Flight[];
  selectedOrigin: string;
  selectedDestination: string;
  filteredOriginList: any[];
  filteredDestinationList: any[];

  loading: boolean = true;

  constructor(
    private flightsService: FlightsService, 
    public authService: AuthService,
    ) {
    this.flights = [];
    this.selectedOrigin = '';
    this.selectedDestination = '';
    this.filteredOriginList = [];
    this.filteredDestinationList = [];
  }

  ngOnInit(): void {
    this.refresh()
  }

  query(): void {
    this.loading = true;
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data => {
      if(data) {
        this.loading = false;
        this.flights = data;
      }
    })
  }

  book(flightId: string): void {
    const userId = this.authService.userId;
    this.flightsService.bookFlight(flightId, userId).subscribe(
      res => {
        alert(`Flight booked`)
        console.log(`Flight with id: ${flightId} booked by user: ${userId}`, res);
      },
      err => console.log(err)
    );
  }

  refresh() {
    this.flightsService.getAllOrigins().subscribe(data => {
      this.filteredOriginList = data;
    });

    this.flightsService.getAllDestinations().subscribe(data => {
      this.filteredDestinationList = data;
    });

    this.loading = false;
  }

}

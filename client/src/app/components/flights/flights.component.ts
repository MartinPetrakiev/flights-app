import { Component, OnInit } from '@angular/core';
import { Flight } from '../../shared/models/flight.model';
import { FlightsService } from '../../shared/flights-service/flights.service';

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


  constructor(private flightsService: FlightsService) {
    this.flights = [];
    this.selectedOrigin = '';
    this.selectedDestination = '';
    this.filteredOriginList = [];
    this.filteredDestinationList = [];
  }

  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data =>{     
      this.filteredOriginList = data;
    }); 

    this.flightsService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
    });

  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data => {
      this.flights = data;
    })
  }

}

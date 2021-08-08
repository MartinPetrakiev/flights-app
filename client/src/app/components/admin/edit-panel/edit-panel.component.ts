import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../models/flight.model';
import { FlightsService } from '../../flights/service/flights.service';


@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {
  flight: Flight = {
    _id: '',
    origin: '',
    destination: '',
    flightNumber: 0,
    depart: '',
    arrive: '',
    nonstop: false,
  }
  flightList: any = [];
  selectedOrigin: string = '';
  selectedDestination: string = '';
  filteredOriginList: any[] = [];
  filteredDestinationList: any[] = [];
  flightNumberSearch: any = '';

  loading = true;

  constructor(private flightsService: FlightsService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  updateFlight(flight: Flight): void {  
    this.flightsService.updateFlight(flight).subscribe(
      res => {
        if(res) {
          this.refresh();
        }
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.'));
  }

  deleteFlight(flight: Flight): void {
    if (window.confirm('are you sure you want to delete this flight? ')) {
      this.flightsService.deleteFlight(flight._id).subscribe(
        res => {
          if(res) {
            this.refresh();
          }
        },
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.'));
    }
  }
  queryOriginDest(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data => {
      this.flightList = data;
    })
  }

  queryFlightNumber(flightNumberSearch: string): void {
    this.flightsService.getFlightByFlightNumber(Number(flightNumberSearch)).subscribe(data => {
      this.flightList = [data];
    })
  }

  resetFilter() {
    this.flightsService.getAllFlightsData().subscribe(data => {
      this.flightList = data;
    });
  }

  refresh() {

    this.flightsService.getAllFlightsData().subscribe(data => {
      this.flightList = data;
      if (this.flightList.length) {
        this.loading = false;
      }
    })
    this.flightsService.getAllOrigins().subscribe(data => {
      this.filteredOriginList = data;
    });

    this.flightsService.getAllDestinations().subscribe(data => {
      this.filteredDestinationList = data;
    });
  }


}

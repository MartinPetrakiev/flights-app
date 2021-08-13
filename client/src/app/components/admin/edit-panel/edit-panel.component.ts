import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../shared/models/flight.model';
import { FlightsService } from '../../../shared/flights-service/flights.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "../../dialog/confirm/confirm-dialog.component";


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

  loading: boolean = true;

  constructor(
    private flightsService: FlightsService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  updateFlight(flight: Flight): void {
    this.router.navigate([`admin/edit/${flight._id}`]);
  }

  deleteFlight(flight: Flight): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete Flight',
        message: 'Are you sure you want to delete this flight?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
          this.flightsService.deleteFlight(flight._id).subscribe(
            res => {
              if (res) {
                this.refresh();
              }
            },
            err => console.log('HTTP Error', err),
            () => console.log('HTTP request completed.'));
      }
    })
  }
  queryOriginDest(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data => {
      this.flightList = data;
    })
  }

  queryFlightNumber(flightNumberSearch: string): void {
    this.loading = true;
    this.flightsService.getFlightByFlightNumber(flightNumberSearch).subscribe(data => {
      if (data) {
        this.loading = false;
        this.flightList = data;
      }
    })
  }

  resetFilter() {
    this.loading = true;
    this.flightsService.getAllFlightsData().subscribe(data => {
      if (data) {
        this.loading = false;
        this.flightList = data;
      }
    });
  }

  refresh() {

    this.flightsService.getAllFlightsData().subscribe(data => {
      this.flightList = data;
    })
    this.flightsService.getAllOrigins().subscribe(data => {
      this.filteredOriginList = data;
    });

    this.flightsService.getAllDestinations().subscribe(data => {
      this.filteredDestinationList = data;
    });

    this.loading = false;
  }


}

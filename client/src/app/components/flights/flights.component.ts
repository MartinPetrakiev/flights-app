import { Component, OnInit } from '@angular/core';
import { Flight } from '../../shared/models/flight.model';
import { FlightsService } from '../../shared/flights-service/flights.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../dialog/alert/alert-dialog.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponet implements OnInit {

  flights: Flight[] = [];
  selectedOrigin: string = '';
  selectedDestination: string = '';
  filteredOriginList: any[] = [];
  filteredDestinationList: any[] = [];

  loading: boolean = true;

  didAdd: boolean = false;

  pageSlice: any[] = [];

  constructor(
    private flightsService: FlightsService,
    public authService: AuthService,
    private dialog: MatDialog
  ) {
  }



  ngOnInit(): void {
    this.refresh()
  }

  query(): void {
    this.loading = true;
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightsService.getFlights(origin, destination).subscribe(data => {
      if (data) {
        this.loading = false;
        this.flights = data;
        this.pageSlice = this.flights.slice(0, 5)
      }
    })
  }

  book(flightId: string): void {
    const userId = this.authService.userId;
    this.flightsService.bookFlight(flightId, userId).subscribe(
      res => {
        console.log(`Flight with id: ${flightId} booked by user: ${userId}`, res);
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'Add to History',
            message: 'Flight added in user history!',
          }
        });
        this.query();
      },
      err => {
        console.log(err);

        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'ERROR',
            message: 'Error occured!',
            color: 'red'
          }
        });
      }
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

  checkBooked(bookedBy: string[]): boolean {
    return bookedBy.some(el => el === this.authService.userId);
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.flights.length) {
      endIndex = this.flights.length
    }
    this.pageSlice = this.flights.slice(startIndex, endIndex)
  }

}

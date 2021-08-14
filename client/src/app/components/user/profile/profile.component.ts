import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FlightsService } from 'src/app/shared/flights-service/flights.service';
import { Flight } from 'src/app/shared/models/flight.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pastFlights: Flight[] = [];
  upcomingFlights: Flight[] = [];
  userId: string = '';

  loadingPast: boolean = true;
  loadingUpcoming: boolean = true;

  pageSlicePast: any[] = [];
  pageSliceUpcoming: any[] = [];

  constructor(
    private flightsService: FlightsService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.userId;
    this.flightsService.getPastFlightsOfUser(this.userId).subscribe(
      res => {
        this.pastFlights = res;
        this.pageSlicePast = this.pastFlights.slice(0, 5);
        this.loadingPast = false;
      },
      err => {
        console.log('get past flights error', err);
      }
    );
    this.flightsService.getUpcomingFlightsOfUser(this.userId).subscribe(
      res => {
        this.upcomingFlights = res;
        this.pageSliceUpcoming = this.upcomingFlights.slice(0, 5);
        this.loadingUpcoming = false;
      },
      err => {
        console.log('get upcoming flights error', err);
      }
    );
  }


  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndexPast, endIndexUpcoming;
    endIndexPast = endIndexUpcoming = startIndex + event.pageSize;

    if (endIndexPast > this.pastFlights.length) {
      endIndexPast = this.pastFlights.length
    }

    if (endIndexUpcoming > this.upcomingFlights.length) {
      endIndexUpcoming = this.upcomingFlights.length;
    }
    
    this.pageSlicePast = this.pastFlights.slice(startIndex, endIndexPast);
    this.pageSliceUpcoming = this.upcomingFlights.slice(startIndex, endIndexUpcoming);
  }

}

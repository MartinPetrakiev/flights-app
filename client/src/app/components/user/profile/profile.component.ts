import { Component, OnInit } from '@angular/core';
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
  constructor(private flightsService: FlightsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.userId;
    this.flightsService.getPastFlightsOfUser(this.userId).subscribe(
      res => {
        this.pastFlights = res;
      },
      err => {
        console.log('get past flights error', err);
      }
    );
    this.flightsService.getUpcomingFlightsOfUser(this.userId).subscribe(
      res => {
        this.upcomingFlights = res;
      },
      err => {
        console.log('get upcoming flights error', err);
      }
    );
  }

}

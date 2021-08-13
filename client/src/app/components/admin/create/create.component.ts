import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightsService } from '../../../shared/flights-service/flights.service';
import { AlertDialogComponent } from '../../dialog/alert/alert-dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  flight: Flight = {
    _id: '',
    origin: '',
    destination: '',
    flightNumber: 0,
    depart: '',
    arrive: '',
    nonstop: false,
  }
  flightList: string[] = [];
  errors: string[] | string = '';

  constructor(
    private flightService: FlightsService,
    private dialog: MatDialog
  ) {
  }

  sendFlight(form: NgForm) {
    this.flight = form.control.value;
    this.flight.nonstop = !!this.flight.nonstop
    this.flightService.postFlight(this.flight).subscribe(
      res => {
        console.log('new flight added', res);

        this.dialog.open(AlertDialogComponent, {
          data: {
            title: 'Add flight',
            message: 'Flight added!',
          }
        });
        
        form.reset();
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

}

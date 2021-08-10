import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightsService } from '../../../shared/flights-service/flights.service';



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

  constructor(private flightService: FlightsService) {
  }

  sendFlight(form: NgForm) {   
    this.flight = form.control.value;
    this.flight.nonstop = !!this.flight.nonstop
    this.flightService.postFlight(this.flight).subscribe(
      res => {
        console.log('new flight added', res);
        form.reset();
      },
      err => console.log(err)
    );  
    
       
  }

}

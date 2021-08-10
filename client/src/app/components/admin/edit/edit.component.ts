import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightsService } from '../../../shared/flights-service/flights.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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

  constructor(private flightService: FlightsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {     
      this.flight._id = params['id'];     
    });
    this.flightService.getFlightById(this.flight._id).subscribe(data => {
      this.flight = data;     
      this.flight.arrive = this.flight.arrive.substring(0, 16);
      this.flight.depart = this.flight.depart.substring(0, 16);
    });
  }


  update(form: NgForm) {
    this.flight = form.control.value;
    this.flight.nonstop = !!this.flight.nonstop
    this.flightService.updateFlight(this.flight).subscribe(
      res => {
        console.log('flight updated', res);
      },
      err => console.log(err)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightsService } from '../../../shared/flights-service/flights.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form: FormGroup;
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
    private fb: FormBuilder,
    private flightService: FlightsService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      flightNumber: ['', [Validators.required]],
      depart: ['', [Validators.required]],
      arrive: ['', [Validators.required]],
      nonstop: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flight._id = params['id'];
    });
    this.flightService.getFlightById(this.flight._id).subscribe(data => {
      this.flight = data;  
      this.flight.arrive = this.flight.arrive.substring(0, 16);   
      this.flight.depart = this.flight.depart.substring(0, 16);   
      this.form.patchValue(this.flight);
    });
  }


  update(): void {
    const flight = this.form.value;
    flight._id = this.flight._id;
    this.flightService.updateFlight(flight).subscribe(
      res => {
        console.log('flight updated', res);
        alert('Flight Updated in database!')
      },
      err => console.log(err)
    );
  }

}

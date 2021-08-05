import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponet } from './flights.component';

describe('FlightsComponet', () => {
  let component: FlightsComponet;
  let fixture: ComponentFixture<FlightsComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsComponet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

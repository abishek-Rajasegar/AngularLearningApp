import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalOverviewComponent } from './new-arrival-overview.component';

describe('NewArrivalOverviewComponent', () => {
  let component: NewArrivalOverviewComponent;
  let fixture: ComponentFixture<NewArrivalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArrivalOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewArrivalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

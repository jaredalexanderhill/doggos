import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoComponent } from './doggo.component';

describe('DoggoComponent', () => {
  let component: DoggoComponent;
  let fixture: ComponentFixture<DoggoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

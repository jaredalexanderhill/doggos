import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Doggo, DoggoComponent } from './doggo.component';

describe('DoggoComponent', () => {
  let component: DoggoComponent;
  let fixture: ComponentFixture<DoggoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
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

  it('should get favourite', () => {
    var doggo = { message: "message", status: "status" };
    component.getFavourite(doggo)
    expect(component.doggo.message).toBe(doggo.message);
  });
});

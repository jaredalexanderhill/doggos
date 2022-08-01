import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export class Doggo {
  message: string;
  status: string;
}

@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: ['./doggo.component.css'],
  //encapsulation: ViewEncapsulation.None
})

export class DoggoComponent implements OnInit {
  doggo: Doggo = new Doggo();
  favourites: Doggo[] = [];
  favouriteCssClass: string = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getDoggo();
  }

  getDoggo() {
    this.httpClient.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(response => {
      this.doggo = response;
      this.favouriteCssClass = null;
    });
  }

  heartDoggo() {
    if (this.favouriteCssClass == 'true') {
      //remove from favourites
      this.favouriteCssClass = null;
      this.favourites.forEach((d, index) => {
        if (d.message == this.doggo.message) {
          this.favourites.splice(index, 1);
        }
      });
    }
    else {
      //add to favourites
      this.favouriteCssClass = 'true';
      this.favourites.push(this.doggo);
    }
  }

  getFavourite(doggo: Doggo) {
    this.doggo = doggo;
    this.favouriteCssClass = 'true';
  }
}

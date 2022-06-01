import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  myrandom = Math.random();
  random = Math.random();

  constructor() { }

  ngOnInit(): void {
  }

}

class MyRandom {
  #random!:number;
  get random() { return this.#random; }
}
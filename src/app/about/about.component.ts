import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string = "Abhishek Jagushte"
  tagline: string = "A curious coder passionate about finished products and user interfaces!"

  constructor() { }

  ngOnInit(): void {
  }

}

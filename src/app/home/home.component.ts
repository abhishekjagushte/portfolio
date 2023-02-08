import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../data/home-page.service';
import { SimpleSection } from '../models/simple-section.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name!: string 
  surname!: string
  tagline!: string
  email!: string
  linkedIn!: string
  instagram!: string  
  resume!: string
  simpleSections!:SimpleSection[];

  constructor(private aboutdataService: HomePageService) { }

  ngOnInit(): void {
    this.name = this.aboutdataService.name
    this.surname = this.aboutdataService.surname
    this.tagline = this.aboutdataService.tagline
    this.email = this.aboutdataService.email
    this.instagram = this.aboutdataService.instagram
    this.linkedIn = this.aboutdataService.linkedIn
    this.resume = this.aboutdataService.resume
    this.simpleSections=this.aboutdataService.simpleSection
  }

}

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
  greetingsLine!: string
  email!: string
  linkedIn!: string
  instagram!: string  
  resume!: string
  simpleSections!:SimpleSection[];
  connectLinks!: {img: string, link: string, alt:string}[]

  constructor(private homeDataService: HomePageService) { }

  ngOnInit(): void {
    this.name = this.homeDataService.name
    this.surname = this.homeDataService.surname
    this.tagline = this.homeDataService.tagline
    this.greetingsLine = this.homeDataService.greetingsLine
    this.email = this.homeDataService.email
    this.instagram = this.homeDataService.instagram
    this.linkedIn = this.homeDataService.linkedIn
    this.resume = this.homeDataService.resume
    this.simpleSections=this.homeDataService.simpleSection
    this.connectLinks = this.homeDataService.connectLinks
  }

}

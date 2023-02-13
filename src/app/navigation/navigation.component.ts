import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../data/home-page.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menuExpanded: boolean = false
  initials!: string 
  name!: string 
  surname!: string
  connectLinks!: {img: string, link: string, alt:string}[]

  constructor(private aboutData: HomePageService) {
    this.connectLinks = aboutData.connectLinks
  }

  ngOnInit(): void {
    this.initials = this.aboutData.initials
    this.name = this.aboutData.name
    this.surname = this.aboutData.surname
  }

  hamburgerMenuClicked(){
    this.menuExpanded = !this.menuExpanded
  }

  destinationChanged(){
    this.menuExpanded = false;
  }

}

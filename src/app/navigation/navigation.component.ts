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
  email: string = "mailto:rgitsroboticsclub@gmail.com"
  linkedIn: string = "https://www.linkedin.com/in/abhishekjagushte/"
  instagram: string = "https://www.instagram.com/abhishekjagushte/" 
  resume: string = "https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing"

  constructor(private aboutData: HomePageService, private homePageService: HomePageService) {
    this.email = this.homePageService.email
    this.instagram = this.homePageService.instagram
    this.linkedIn = this.homePageService.linkedIn
    this.resume = this.homePageService.resume
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

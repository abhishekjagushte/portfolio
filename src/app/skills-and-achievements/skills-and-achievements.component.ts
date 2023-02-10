import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { SkillsService } from '../data/skills.service';
import { BarGraph } from '../models/graphs/bar-graph.model';

@Component({
  selector: 'app-skills-and-achievements',
  templateUrl: './skills-and-achievements.component.html',
  styleUrls: ['./skills-and-achievements.component.css']
})
export class SkillsAndAchievementsComponent implements OnInit {


  barGraphs!: BarGraph[]
  otherTechnologies!: {img: string, name: string}[]

  constructor(private skillsService: SkillsService) {
    this.barGraphs = this.skillsService.barGraphs
    this.otherTechnologies = this.skillsService.otherTechnologies
  }


  ngOnInit(): void {
  }

}

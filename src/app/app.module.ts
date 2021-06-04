import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsAndAchievementsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsAndAchievementsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ExperiencesComponent,
    PageNotFoundComponent,
    ContactMeComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

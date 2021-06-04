import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';

const routes: Routes = [
  {path: "", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "experiences", component: ExperiencesComponent},
  {path: "skills", component: SkillsAndAchievementsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

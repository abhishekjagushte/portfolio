import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';

const routes: Routes = [
  {path: "", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "skills", component: SkillsAndAchievementsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

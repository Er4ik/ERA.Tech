import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animationState: 'home' } },
  { path: 'home', component: HomeComponent, data: { animationState: 'home' } },
  { path: 'vacancies', component: VacanciesComponent, data: { animationState: 'vacancies' } },
  { path: 'about', component: AboutComponent, data: { animationState: 'about' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

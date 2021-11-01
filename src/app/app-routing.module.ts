import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsportComponent } from './esport/esport.component';
import { PartnersComponent } from './partners/partners.component';
import { EducationComponent } from './education/education.component';
import { ServiceComponent } from './service/service.component';
import { MoreComponent } from './more/more.component';
// import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'esport', component: EsportComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'education', component: EducationComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'more', component: MoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
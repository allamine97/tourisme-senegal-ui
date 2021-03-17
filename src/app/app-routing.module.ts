import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { CulturesComponent } from './pages/cultures/cultures.component';
import { PersonnalitesComponent } from './pages/personnalites/personnalites.component';
import { TourismeComponent } from './pages/tourisme/tourisme.component';

const routes: Routes=[
    {path: '', component:AcceuilComponent},
    {path: 'tourisme',component:TourismeComponent},
    {path:'culture',component:CulturesComponent},
    {path:'personnalite',component:PersonnalitesComponent},
    {path: '' , redirectTo : 'acceuil', pathMatch : 'full'},
    {path: '**' , component: AcceuilComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
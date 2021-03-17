import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';

const routes: Routes=[
    {path: '', component:AcceuilComponent},
    {path: '' , redirectTo : 'acceuil', pathMatch : 'full'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
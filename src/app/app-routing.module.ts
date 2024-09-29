import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutFormsComponent } from './pages/ajout-forms/ajout-forms.component';
import { FormsListComponent } from './pages/forms-list/forms-list.component';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'getstarted' },
  {path:"addForms",component:AjoutFormsComponent},
  {path:"formsList",component:FormsListComponent},
  {path:"getstarted",component:GetstartedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

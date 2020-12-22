import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { LoginComponent } from './login/login.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { UpdateExpensesComponent } from './update-expenses/update-expenses.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-expenses',
    component: AddExpensesComponent
  },
  {
    path: 'expenses',
    component: ExpensesComponent
  },
  {
    path: 'visualization',
    component: VisualizationComponent
  },
  {
    path: 'update-expenses',
    component: UpdateExpensesComponent
  }
  ,
  {
    path: 'update-expenses/:uid',
    component: UpdateExpensesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

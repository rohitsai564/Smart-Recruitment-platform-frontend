import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';


import { HomeComponentComponent } from './home/home-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {path:"",component:HomeComponentComponent},
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"register",component:RegisterFormComponent}
];

@NgModule({
    declarations:[],
    imports:[
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
  })
export class AppModule  {}

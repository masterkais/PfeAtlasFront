import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"groups",component:GroupComponent},
  {path:"new-group",component:NewGroupComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"",redirectTo:"login:",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { InquiryComponent } from './inquiry/inquiry.component';
import { StaffsComponent } from './staffs/staffs.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'staffs', component:StaffsComponent},
  {path:'location', component:LocationComponent},
  {path:'inquiry', component:InquiryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TakenoteComponent } from './components/takenote/takenote.component';

const routes: Routes = [
   {path:'registration', component: RegistrationComponent },
   {path:'login',component: LoginComponent },
   {path:'forgot',component: ForgotpasswordComponent },
   {path:'reset',component: ResetpasswordComponent },
   {path:'dashboard',component:DashboardComponent,
   children:[
    // {path:'takenote',component:TakenoteComponent},
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes',component:GetallnoteComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllUserComponent } from './all-user/all-user.component';
import { FindUserByNameComponent } from './find-user-by-name/find-user-by-name.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path : '', redirectTo :'/home' , pathMatch: 'full' },
  {path :'home' ,component : HomeComponent},
  {path :'profile/:id' ,component : ProfileComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'about',component:AboutUsComponent},
  {path:'allUser',component:AllUserComponent},
  {path:'findUserByName',component:FindUserByNameComponent},
  {path:'SignUp',component:SignUpComponent}

 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*Angular Matrial Modules Imports */
import { MatInputModule }from '@angular/material/input';
import { MatCardModule }from '@angular/material/card';
import { MatButtonModule }from '@angular/material/button';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner'; 
import { MatDialogModule }from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AllUserComponent } from './all-user/all-user.component';
import { FindUserByNameComponent } from './find-user-by-name/find-user-by-name.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoControllerService } from './demo-controller.service';
import { FooterComponent } from './footer/footer.component';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { EditPageComponent } from './edit-page/edit-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    HomeComponent,
    ProfileComponent,
    AboutUsComponent,
    SignUpComponent,
    AllUserComponent,
    FindUserByNameComponent,
    FooterComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCheckboxModule
    
  ],
  providers: [DemoControllerService,NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

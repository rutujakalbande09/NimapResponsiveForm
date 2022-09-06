import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { StuentProfile } from '../stuent-profile';
import { NavigationExtras, Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showMainPage : boolean = true;
  studentData :any = StuentProfile;


  constructor(public dialog: MatDialog, private router :Router,public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit(): void {
  }
 

  openDialog(): void {
            console.log('openDialog...........>');
            const dialogRef = this.dialog.open(RegistrationComponent, {
              width: '750px',
              data: 'Kiran....'
            }); 

            dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.studentData = result.data;
            if(result.data.firstName == null ||result.data.firstName == "" )
              {
                console.log ('Nulll');
              }
            else{
              console.log ('this.studentData.id ', this.studentData.name);
           
              this.router.navigate(['/profile',result.data.id ]);
            
              } 
          }); 
        }
 

}

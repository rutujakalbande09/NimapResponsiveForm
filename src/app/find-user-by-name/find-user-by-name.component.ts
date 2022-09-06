import { Component, OnInit } from '@angular/core';
import { DemoControllerService } from '../demo-controller.service';
import { StuentProfile } from '../stuent-profile';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-find-user-by-name',
  templateUrl: './find-user-by-name.component.html',
  styleUrls: ['./find-user-by-name.component.css']
})
export class FindUserByNameComponent implements OnInit {

  signupModelForm : any= new  StuentProfile('','','','','','','','','','','','');
  searchQuery : string;
 
  flagData: any= false;
  constructor(private demoControllerService : DemoControllerService,public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
 
  search()
  {
    console.log(" --- searchQuery -- "+ this.searchQuery);
    this.demoControllerService.findDataByName(this.searchQuery).subscribe((p  ) =>  
    {  
      this.signupModelForm =p; 
      console.log('  this.signupModelForm =>  '+ this.signupModelForm.firstName);
      this.flagData =true;
      this.signupModelForm.loadOldFlag = true;
      const dialogRef = this.dialog.open(RegistrationComponent, {
        width: '750px',
        data: this.signupModelForm
      });  
    dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result); 
            if(result.data.firstName == null ||result.data.firstName == "" )
            {
              //console.log ('Nulll'); 
            }
            else
            {
              console.log (result.data.firstName); 
              this.signupModelForm = result.data;
            }  
      }); 
        
  }); 
}

}

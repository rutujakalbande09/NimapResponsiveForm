import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DemoControllerService } from '../demo-controller.service';
import { RegistrationComponent } from '../registration/registration.component';
import { StuentProfile } from '../stuent-profile';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { EditPageComponent } from '../edit-page/edit-page.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 // @Input()
 // stData : StuentProfile;
 idFromPage : String;

  stData : any  = new StuentProfile('','','','','','','','','','','','');

  @Output() notifyParent = new EventEmitter();

  constructor(public dialog: MatDialog,
    private  demoControllerService :  DemoControllerService,private router: Router,private route: ActivatedRoute,
    public navCtrl: NgxNavigationWithDataComponent
    ) { 
      console.log('******load***** is = ',this.route.snapshot.paramMap.get('id')); 
      //this.idFromPage = this.route.snapshot.paramMap.get('id');
       this.demoControllerService.findDataByName(this.route.snapshot.paramMap.get('id')).subscribe((p  ) =>  
      {  
        this.stData =p; ;
      });
 
    }

  ngOnInit(): void {
  }

  callRegistrationPopUp()
   {
          console.log('Parent page called..');
          console.log('openDialog...........>');
          this.stData.loadOldFlag = true;
          const dialogRef = this.dialog.open(EditPageComponent, {
                width: '750px',
                data: this.stData
              });  
            dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed', result); 
                    if(result.data.firstName == null ||result.data.firstName == "" )
                    {
                      console.log ('Nulll'); 
                    }
                    else
                    {
                      console.log (result.data.firstName); 
                      this.stData = result.data;
                    }  
              }); 
      console.log('Parent page called End..');
  }


  addUser(){
    this.demoControllerService.addUserData(this.stData);
  }
}

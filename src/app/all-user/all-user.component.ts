import { Component, OnInit } from '@angular/core';
import { DemoControllerService } from '../demo-controller.service';
import { StuentProfile } from '../stuent-profile';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  uDataList : StuentProfile[] = [];

  constructor(private demoControllerService : DemoControllerService) { }

  ngOnInit() {
    let data2: any = [];
  
    console.log('**** *** Init*****');
    this.demoControllerService.getData().subscribe((p :StuentProfile[] ) =>  
                    { 
                        console.log('Data received 3:: '+p.length);
                        console.log('Data received 3:: '+p.toString().length);
                        this.uDataList =p;  
                        for(var i = 0 ; i <this.uDataList.length;i++)
                        {
                          console.log("image Path :: "+ this.uDataList[i].image);
                        }
                      });
                }
} 

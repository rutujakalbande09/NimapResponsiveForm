import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { StuentProfile } from './stuent-profile';

@Injectable({
  providedIn: 'root'
})
export class DemoControllerService {

  sData : StuentProfile;

constructor(private http: HttpClient, private routr :Router) { }
addUserData( User : StuentProfile) 
  {
    const postData = new FormData();
    let id : any;
   // postData.append("_id", User._id);
    postData.append("firstName", User.firstName);
    postData.append("lastName", User.lastName);
    postData.append("email", User.email);
    postData.append("mobileNumber", User.mobileNumber);
    postData.append("state", User.state);

    postData.append("country", User.country);
    postData.append("interest", User.interest);
    postData.append("age", User.age);
    postData.append("loadOldFlag", User.loadOldFlag);
    postData.append("address", User.address);
    let body:any =  User; 
    let d = new Date();
    let hostUrl = 'http://localhost:3000/Users?v='+d.toLocaleTimeString();
    return this.http.post<StuentProfile>(hostUrl, body);
  /* this.http.post<StuentProfile>(hostUrl, body).subscribe(responseData    => {
      console.log("Response ...got" , responseData.id );
      id = responseData.id;
      let s  : string = responseData.toString();
     console.log("id......  " , id);
     return id;
       
     // this.routr.navigate(['/home']);
    }
    ); */

  }

 
  getData()
  {
     console.log('--getStudentData..');
     let d = new Date(); 
     let url = 'http://localhost:3000/Users?v='+d.toLocaleTimeString();
     return  this.http.get(url);
  }


  findDataByName(query : String)
  {
    console.log('--findDataByName..' +query);
    let url = 'http://localhost:3000/Users/'+query;
    console.log('--findDataByName..' +url);
    console.log('--findDataByName..');
    let d = new Date(); 
    url= url+'?v='+d.toLocaleTimeString();
    console.log('--findDataByName..' +url); 
    return  this.http.get(url);
  }

  updateUserData(User : StuentProfile) 
  {
    console.log('User - ', User.id);
    let d = new Date();
    let body:any =  User; 
    let hostUrl = 'http://localhost:3000/Users/'+User.id;
    return this.http.put<StuentProfile>(hostUrl, body);

  }

  
  }


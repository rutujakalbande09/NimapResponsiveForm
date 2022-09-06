import { Component, EventEmitter, OnInit, Output,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
 
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StuentProfile } from '../stuent-profile';
import { DemoControllerService } from '../demo-controller.service';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

 ///Variable Declaration Section 
 profileD : any = new StuentProfile('','','','','','','','','','','','');
 registrationForm: FormGroup;
 imagePreview : String = "/assets/newSet/upload.png";
 imageValidation  = false;
 imageSizeValidation = false;
 formSubmitFlag= false; 
 stateArr : any = ['Andhra Pradesh','Arunachal Pradesh', 'MahaRashtra', 'Madhyapradesh','Telangana','Karnataka','Kerala'];
 countryArr : any =['Australia','Ameraica','Great Britain','India','Indonesia','Japan','Myanmar','Bhutan'];

 constructor(public dialogRef: MatDialogRef<EditPageComponent>,
   @Inject(MAT_DIALOG_DATA) public enqDataRecevied: StuentProfile,private demoControllerService : DemoControllerService
   ) {
     console.log('Edit page-------------->')
         this.registrationForm = new FormGroup
         (
           {
           firstName: new FormControl(enqDataRecevied.firstName, {
             validators: [Validators.required, Validators.maxLength(20),Validators.pattern("[a-zA-Z ]*")]
           }),

           lastName :  new FormControl(enqDataRecevied.lastName, {
             validators: [Validators.required]
           }),
           email :  new FormControl(enqDataRecevied.email, {
             validators: [Validators.required]
           }),
           mobileNumber :  new FormControl(enqDataRecevied.mobileNumber, {
             validators: [Validators.required]
           }),
           ageValue : new FormControl(enqDataRecevied.age, {
             validators: [Validators.required]
           }),
           stateVal : new FormControl(enqDataRecevied.state, {
             validators: [Validators.required]
           }),
           countryVal : new FormControl(enqDataRecevied.country, {
             validators: [Validators.required]
           }),
           address :  new FormControl(enqDataRecevied.address, {
             validators: [Validators.required]
           }),
         } 
     ); 

    
           //This logic is when we are trying to Edit Image or Edit Profile
           if(enqDataRecevied.loadOldFlag == true)
           {
           //this.registrationForm.value.firstName.set( enqDataRecevied.firstName) ;  
           this.imagePreview= enqDataRecevied.image;
           this.tags = this.enqDataRecevied.interest;
           }

  }

  formatAge(value: number) {
   if (value >= 1) {
     return Math.round(value / 1) + 'Yr';
   } 
   return value; 
   
 }

  onImagePicked(event : Event)
  {
       this.imagePreview   = "/assets/newSet/upload.png";
       this.imageValidation = false;
       this.imageSizeValidation = false;
       // alert('call')
        const file = (event.target as HTMLInputElement).files[0];
       this.registrationForm.patchValue({ image: file }); 
       const reader = new FileReader();

       //Image Validation Function
       if (file.type === 'image/jpeg' || file.type === 'image/png' ||  file.type ==='image/jpg') 
       { 
         if (file.size > 310* 325) {  
           this.imageSizeValidation  = true;
           return;
         }
       }
       else{
         this.imageValidation  = true;
         return;
       } 
       reader.onload = () => {
         this.imagePreview = reader.result as string;
       };
       reader.readAsDataURL(file);
  }
 

 ngOnInit(): void {
 }

 onNoClick(): void {
   this.dialogRef.close({ event: 'close', data: this.profileD });
 }


 /* ----------------Add Tags code start -----------------------------*/

 visible = true;
 selectable = true;
 removable = true;
 separatorKeysCodes: number[] = [ENTER, COMMA];

 tagsCtrl = new FormControl();
 filteredTags: Observable<string[]>;
 tags: string[] = ['Cricket'];
 allTags :string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

 @ViewChild('tagInput') fruitInput: ElementRef<HTMLInputElement>;
 @ViewChild('auto') matAutocomplete: MatAutocomplete;


 add(event: MatChipInputEvent): void {
   const input = event.input;
   const value = event.value;

   // Add our fruit
   if ((value || '').trim()) {
     this.tags.push(value.trim());
   }

   // Reset the input value
   if (input) {
     input.value = '';
   }

   this.tagsCtrl.setValue(null);
 }

 remove(fruit: string): void {
   const index = this.tags.indexOf(fruit);

   if (index >= 0) {
     this.tags.splice(index, 1);
   }
 }

 selected(event: MatAutocompleteSelectedEvent): void {
   this.tags.push(event.option.viewValue);
   this.fruitInput.nativeElement.value = '';
   this.tagsCtrl.setValue(null);
 }

 private _filter(value: string): string[] {
   const filterValue = value.toLowerCase();

   return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
 }
 /* ----------------Add Tags code End -----------------------------*/


 
 
 
 submit()
 {
       console.log('this.registrationForm.value = ' +this.registrationForm.value);
       if(this.imagePreview=='/assets/newSet/upload.png')
               {
                 this.imageValidation = true;
               }
        this.formSubmitFlag = true;
         if(this.registrationForm.valid )
         {
               if(this.imagePreview=='/assets/newSet/upload.png')
               {
                 this.imageValidation = true;
               }
               else
               {
               
                   this.profileD.firstName = this.registrationForm.value.firstName; 
                   this.profileD.lastName = this.registrationForm.value.lastName; 
                   this.profileD.email =  this.registrationForm.value.email; 
                   this.profileD.mobileNumber=  this.registrationForm.value.mobileNumber; 
                   this.profileD.state = this.registrationForm.value.stateVal;
                   this.profileD.country =this.registrationForm.value.countryVal;
                   this.profileD.image =this.imagePreview;
                   this.profileD.age =this.registrationForm.value.ageValue;
                   this.profileD.interest = this.tags;
                   this.profileD.address= this.registrationForm.value.address;
                   this.profileD.id = this.enqDataRecevied.id;
                   console.log('edit submit ----   this.profileD =  ', this.profileD);
                   this.demoControllerService.updateUserData(this.profileD).subscribe(p   =>{
                     console.log('yes ----  this.profileD.id =  ', p.id);
                     //this.profileD.id = p.id;
                     this.onNoClick(); 
                   });

                    
                    
               }
         }
   }

}

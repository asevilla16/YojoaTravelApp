import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../models/profile'
import {ProfileServiceService} from '../../Services/profile-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup;
 

  @Input()
  user : User;

  

  constructor(private profileService: ProfileServiceService, private _formBuilder: FormBuilder)
   {this.buildForm() ; }

   buildForm() {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: [''],
      password: ['', Validators.required],
    });
  }
   
   ngOnInit(): void {
    console.log(this.user);
    
  }

 
  update(id: number){
    
    console.log("id :" + id);
    console.log(this.user);
    this.profileService.updateUser(this.user,id).subscribe(
       res=>{
        console.log(res)
       }

     )
  }

}

import { LandingService } from './../../services/landing.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  activities: any;

  formGroup: FormGroup;

  constructor(private landingPageService: LandingService) { 
    
    this.formGroup = new FormGroup({
      activity: new FormControl(null,[Validators.required]),
      cantidadPersonas: new FormControl(null,[Validators.required]),
      dateInit: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required])
    });

    
  }
  

  ngOnInit(): void {
  }
/*
  getLocations(){
    this.HomeServices.getActivity().subscribe(
      (response) => {
          this.activities = response;
      },
      (error) => { 
          console.log(error);
      })
  }
*/

getFormControl(controlName: string): FormControl
{
  return this.formGroup.get(controlName) as FormControl;
}



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ServicesService} from '../../services/home.service';

import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {


  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  activities: any;

  formGroup: FormGroup;

  constructor(private HomeServices: ServicesService) { 
    
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


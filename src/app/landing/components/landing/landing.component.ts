import { LandingService } from './../../services/landing.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { error } from 'selenium-webdriver';

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

  /*data-picker minmax
 today: Date = new Date();
 date: string = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  dateFormat: any = this.date.toString();
 minDate: Date = this.dateFormat;*/
 minDate: Date = new Date("2021-05-28")
 maxDate: Date = new Date("2021-10-31");
 

  constructor(private landingPageService: LandingService) { 
  

    
  
    this.formGroup = new FormGroup({
      activity: new FormControl(null,[Validators.required]),
      cantidadPersonas: new FormControl(null,[Validators.required]),
      dateInit: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required]),
      checked1: new FormControl(null),
      firstTime: new FormControl(null)
    });

    
  }
  

  ngOnInit(): void {
    this.getActivities();
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

getActivities(){
  this.landingPageService.getActivity().subscribe(
    (response)=>{
      this.activities = response;
    },
    (error) => {
      console.log('error :>> ', error);
    }
    
  )
}

getFormControl(controlName: string): FormControl
{
  return this.formGroup.get(controlName) as FormControl;
}



}

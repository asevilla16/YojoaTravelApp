import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'; 
import {ActivityService} from '../../../Services/activity.service'
import {ImageUrl} from '../../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  activities: any =[];
  imagenURI= ImageUrl.apiURL;

  constructor(private activityService: ActivityService) { } 

  getActivities(){
    this.activityService.getActivities().subscribe
    (res=> {
        this.activities= res;
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getActivities();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}

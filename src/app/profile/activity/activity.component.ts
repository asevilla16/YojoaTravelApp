import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../Services/activity.service'
import {ImageUrl} from '../../../environments/environment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activities: any =[];
   imagenURI= ImageUrl.apiURL;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    
    this.activityService.getActivity(1).subscribe
    (res=> {
        this.activities= res;
        console.log(this.activities);
      },
      err => console.log(err)
    );

   
  }


  


}

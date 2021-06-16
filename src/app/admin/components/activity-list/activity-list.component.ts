import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivityService } from '../../../Services/activity.service';
import {ImageUrl} from '../../../../environments/environment';
import { ModalComponent } from '../modal/modal.component';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activityModel: Activity; 
  
  activities : any =[];
  imagenURI= ImageUrl.apiURL;

  constructor(private activityService: ActivityService, public dialog: MatDialog) { }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data:{Model:this.activityModel}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.activityModel = result;

      console.log(result)
      
    });
  }



  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
    this.activityService.getActivities().subscribe(
      res => {
        this.activities= res;
        console.log(this.activities)
      },
      err => console.log(err)
    );
  }

}

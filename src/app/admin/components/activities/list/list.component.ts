import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../activity.service';
import { IActivity } from '../models/activity';

export interface Activity {
  
  id: number;
  nombre: string;
  descripcion: string;
  clasification: number;
  
}



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activitieslist: IActivity[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'clasificacion'];
  dataSource = this.activitieslist;

  constructor(private activityservice: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
    this.activityservice.getActivities()
    .subscribe(
      res=>{
        //this.activitieslist = res;
        console.log('res :>> ', res);
      },
      err => console.log('err :>> ', err)
    );
   
  }

}

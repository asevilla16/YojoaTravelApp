import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityListComponent } from './components/activity-list/activity-list.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild(ActivityListComponent) activity: ActivityListComponent;

  
  
  hijo= 'activity';

  constructor() { }

  ngOnInit(): void {
    
  }
  showComponent(action){
    this.hijo= action;
    
  };


}

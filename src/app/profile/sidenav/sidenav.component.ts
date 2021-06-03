import { Component, OnInit, ViewChild } from '@angular/core';
import {ProfileServiceService} from '../../Services/profile-service.service'
import {ActivityComponent} from '../activity/activity.component'
import {AccountComponent} from '../account/account.component';
import { activity } from 'src/app/reservation/components/reservation/reservation.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {

  @ViewChild(ActivityComponent) activity: ActivityComponent;
  @ViewChild(AccountComponent) account: AccountComponent;

  user : any =[];
  hijo= 'activity';

  constructor(private profileService: ProfileServiceService) { 
    
  }

  ngOnInit(): void {

   

    this.profileService.getUser(1).subscribe(
      res => {
        this.user= res;
      },
      err => console.log(err)
    );
  }

  showComponent(action){
    this.hijo= action;
    
  };
 

}

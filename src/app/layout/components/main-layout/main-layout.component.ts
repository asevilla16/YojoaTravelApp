import { AuthComponent } from './../../../auth/components/auth/auth.component';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { HomeComponent } from 'src/app/home/components/home/home.component';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(AuthComponent, {
      data: { name: 'Hello' },
    });
  }

 
}

import { NgModule } from '@angular/core';

//AllMaterialModuls
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';




const MaterialComponents = [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule, 
  MatMenuModule, MatAutocompleteModule, MatCardModule,MatSlideToggleModule, MatRadioModule, MatGridListModule, MatDividerModule, 
  MatSidenavModule, MatTableModule, MatToolbarModule, MatDialogModule];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule {}

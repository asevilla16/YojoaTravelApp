import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  fromCreateActivity: FormGroup;

  constructor() { 

    this.fromCreateActivity = new FormGroup({
      nombreCategoria: new FormControl(null, [Validators.required])
    });

  }

  clearforms(){
    


  }


 




  ngOnInit(): void {
  }

}

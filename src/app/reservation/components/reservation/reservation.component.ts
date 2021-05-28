import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';


export interface activity {
  id: number;
  nombre: string;
  description: string;
  startime: Time;
  endtime: Time;
  duration: Time;
  location: string;
  price: number;
  image: string;
}

const ELEMENT_DATA: activity[] = [
  {id: 1, nombre: "Caminata Deportiva", description: "Caminata por la tarde", startime: {hours: 20, minutes: 30} , endtime: {hours: 21, minutes: 30}, duration: {hours: 1, minutes: 0}, location: "El Cajon", price: 120, image: "../../assets/ActivitiesImage.jpg"},
  {id: 2, nombre: "Caminata Deportiva", description: "Caminata por la tarde", startime: {hours: 20, minutes: 30} , endtime: {hours: 21, minutes: 30}, duration: {hours: 1, minutes: 0}, location: "Panacam", price: 120, image: "../../assets/ActivitiesImage.jpg"},
  {id: 3, nombre: "Caminata Deportiva", description: "Caminata por la tarde", startime: {hours: 20, minutes: 30} , endtime: {hours: 21, minutes: 30}, duration: {hours: 1, minutes: 0},location: "Santa Barbara", price: 120, image: "../../assets/ActivitiesImage.jpg"},
  
];

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  displayedColumns: string[] = ['id', 'paqueteID', 'cantidad personas', 'clientID', 'precio total', 'imopuesto'];
  activities = ELEMENT_DATA;

  //actividades: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  

}

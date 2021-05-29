import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';


export interface activity {
  id: number;
  nombre: string;
  description: string;
  startime: string;
  endtime: string;
  duration: string;
  location: string;
  price: number;
  image: string;
}

const ELEMENT_DATA: activity[] = [
  {
    id: 1,
    nombre: 'Caminata Deportiva',
    description: 'Caminata por la mañana',
    startime: '8:00 am',
    endtime: '9:00 am',
    duration: '1 hora',
    location: 'El Cajon',
    price: 150,
    image: "../../assets/senderocajon.jpg",
  },

  {
    id: 2,
    nombre: 'Caminata Deportiva',
    description: 'Caminata por la tarde',
    startime: '8:00 am',
    endtime: '9:00 am',
    duration: '1 hora',
    location: 'Panacam',
    price: 160,
    image: "../../assets/panacamhiking.jpg",
  },

  {
    id: 3,
    nombre: 'Caminata Deportiva',
    description: 'Caminata por la mañana',
    startime: '8:00 am',
    endtime: '9:00 am',
    duration: '1 hora',
    location: 'Santa Barbara',
    price: 110,
    image: "../../assets/parque-nacional-de-santa-barbara.jpg",
  }

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

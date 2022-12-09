import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  snapFaces!: FaceSnap[];

  constructor() { }

  ngOnInit(): void {
    this.snapFaces = [
      {
        title : 'Apprendre React & TypeScript',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
        snaps : 6,
        location : 'PARIS'
      },
      {
        title : 'les fondamentaux de Angular',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
        snaps : 10,
        location : 'MONTREAL'
      },
      {
        title : 'Grid & Flexbox css',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
        snaps : 5,
      },
      {
        title : 'Apha.Franck~2.0',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
        snaps : 0,
        location : 'LYON'
      }
    ]
  }

}

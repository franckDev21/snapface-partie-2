import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap

  title!: string;
  description !: string;
  createdDate !: Date;
  snaps !: number;
  imageUrl!: string;
  buttonText!: string;


  ngOnInit() {
    this.title = "Mon titre"
    this.description =" Coucous les amis"
    this.createdDate = new  Date()
    this.snaps = 5
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh snap'
  }

  onSnap(){
    if(this.buttonText === 'Oh snap'){
      this.buttonText = 'Oops ! unsnap'
      this.faceSnap.snaps++
    }else{
      this.buttonText = 'Oh snap'
      this.faceSnap.snaps--
    }
  }

}

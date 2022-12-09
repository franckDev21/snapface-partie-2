import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsServices} from "../services/face-snaps.services";

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() snapFace!: FaceSnap

  buttonText!: string;

  constructor(private faceSnapsServices: FaceSnapsServices) {}

  ngOnInit() {
    this.buttonText = 'Oh snap'
  }

  onSnap(){
    if(this.buttonText === 'Oh snap'){
      this.buttonText = 'Oops ! unsnap'
      this.faceSnapsServices.snapFaceSnapById(this.snapFace.id,'snap')
    }else{
      this.buttonText = 'Oh snap'
      this.faceSnapsServices.snapFaceSnapById(this.snapFace.id,'unsnap')
    }
  }

}

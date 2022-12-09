import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() snapFace!: FaceSnap

  buttonText!: string;


  ngOnInit() {
    this.buttonText = 'Oh snap'
  }

  onSnap(){
    if(this.buttonText === 'Oh snap'){
      this.buttonText = 'Oops ! unsnap'
      this.snapFace.snaps++
    }else{
      this.buttonText = 'Oh snap'
      this.snapFace.snaps--
    }
  }

}

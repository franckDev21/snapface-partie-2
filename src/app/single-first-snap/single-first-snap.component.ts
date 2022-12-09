import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsServices} from "../services/face-snaps.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-first-snap',
  templateUrl: './single-first-snap.component.html',
  styleUrls: ['./single-first-snap.component.scss']
})
export class SingleFirstSnapComponent implements OnInit {

  snapFace!: FaceSnap
  buttonText!: string;

  constructor(private faceSnapsServices: FaceSnapsServices,
              private  route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.snapFace = this.faceSnapsServices.getFaceSnapById(faceSnapId);
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

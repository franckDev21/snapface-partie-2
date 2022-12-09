import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsServices} from "../services/face-snaps.services";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  snapFaces!: FaceSnap[];

  constructor(private faceSnapsServices: FaceSnapsServices) { }

  ngOnInit(): void {
    this.snapFaces = this.faceSnapsServices.getAllFaceSnaps();
  }

}

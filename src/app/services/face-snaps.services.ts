import  { Injectable } from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsServices {
  snapFaces:FaceSnap[] = [
    {
      id: 1,
      title : 'Apprendre React & TypeScript',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      snaps : 6,
      location : 'PARIS'
    },
    {
      id: 2,
      title : 'les fondamentaux de Angular',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      snaps : 10,
      location : 'MONTREAL'
    },
    {
      id: 3,
      title : 'Grid & Flexbox css',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      snaps : 5,
    },
    {
      id: 4,
      title : 'Apha.Franck~2.0',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, maxime.',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      snaps : 0,
      location : 'LYON'
    }
  ]

  getAllFaceSnaps(): FaceSnap[]{
    return this.snapFaces;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.snapFaces.find(faceSnap => faceSnap.id === faceSnapId)
    if(!faceSnap){
      throw new Error('FaceSnap not found !');
    }else{
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'):void {
    const faceSnap = this.getFaceSnapById(faceSnapId)
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}



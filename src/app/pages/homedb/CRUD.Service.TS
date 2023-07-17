import { Injectable } from "@angular/core";
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";

export interface CustomerData {
  fullname: string;
  ispostpaid: boolean;
  price: number;
  telno: string;
}

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private _DB: any;
  constructor(private firestore: Firestore) {}

  loadAllData(): Observable<CustomerData[]> {
    const notesRef = collection(this.firestore, "StudentCollection");
    return collectionData(notesRef, { idField: "id" }) as Observable<CustomerData[]>;
  }

  createData(tmpObj:CustomerData){
    const notesRef = collection(this.firestore, 'StudentCollection');
    
    return addDoc(notesRef,{
      fullname: tmpObj.fullname,
      ispostpaid: tmpObj.ispostpaid,
      price: tmpObj.price,
      telno: tmpObj.telno
    });
  }

  deleteData(documentId: string) {
    const noteRef = doc(this.firestore, 'StudentCollection', documentId);
    return deleteDoc(noteRef);
  }
}

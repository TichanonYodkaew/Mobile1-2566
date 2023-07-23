import { Injectable } from "@angular/core";
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";

export interface CustomerData {
  id:string;
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
      id: tmpObj.id,
      fullname: tmpObj.fullname,
      ispostpaid: tmpObj.ispostpaid,
      price: tmpObj.price,
      telno: tmpObj.telno
    });
  }

  deleteData(tmpObj:CustomerData) {
    const noteRef = doc(this.firestore, 'StudentCollection/', tmpObj.id);
    return deleteDoc(noteRef);
  }

  updateData(tmpObj: CustomerData) {
    const noteRef = doc(this.firestore, 'StudentCollection/', tmpObj.id);
    return updateDoc(noteRef, {
      fullname: tmpObj.fullname,
      ispostpaid: tmpObj.ispostpaid,
      price: tmpObj.price,
      telno: tmpObj.telno
    });
  }
  
}

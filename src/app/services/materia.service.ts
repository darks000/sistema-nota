import { Injectable } from '@angular/core';
import{AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore'
import {Observable, observable} from 'rxjs'
import {map} from 'rxjs/operators'
import{MateriaI} from '../models/materia.interface'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
private todosCollection: AngularFirestoreCollection <MateriaI> 
private todos:Observable<MateriaI[]>;
  
constructor(db: AngularFirestore) { 
    this.todosCollection= db.collection<MateriaI>('todos')
    this.todos =this.todosCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a =>{
          const data =a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }   
    ));
  }

  getMaterias(){
    return this.todos;
  }

  getmateria(id:string ){
    return this.todosCollection.doc<MateriaI>(id).valueChanges();
  }

  updateMateria(materi:MateriaI, id: string){
    return this.todosCollection.doc(id).update(materi)
  }

  addmateria(materi:MateriaI ){
    return this.todosCollection.add(materi);
  }
removoMateria(id: string){
  return this.todosCollection.doc(id).delete();
}
  
}

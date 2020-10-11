import { Component,OnInit } from '@angular/core';
import {MateriaI} from '../models/materia.interface'
import {MateriaService} from '../services/materia.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
 materias: MateriaI[];

 constructor(private materiaservice:MateriaService){}
  
ngOnInit(){
  this.materiaservice.getMaterias().subscribe(res=>{
    console.log('materias',res);
    this.materias=res;
  })
}

}

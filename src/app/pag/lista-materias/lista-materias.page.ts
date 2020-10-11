import { Component, OnInit } from '@angular/core';
import {MateriaI} from '../../models/materia.interface'
import {ActivatedRoute}  from '@angular/router'
import {NavController, LoadingController} from '@ionic/angular'
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.page.html',
  styleUrls: ['./lista-materias.page.scss'],
})
export class ListaMateriasPage implements OnInit {
materia:MateriaI={
  nombre_materia:'',
  nota1corte:0,
  nota2corte:0,
  nota3corte:0,
  definitiva:0,
};
materiaId=null;
  constructor(private route:ActivatedRoute,private nav:NavController,
    private  materiaservice:MateriaService, private loadingcontroller: LoadingController) { }

  ngOnInit() {
    this.materiaId = this.route.snapshot.params['id'];
    if(this.materiaId){
      this.loadmateria();
    }

  }
 async loadmateria(){
const loading= await this.loadingcontroller.create({
  message:'cargando.........'
});
await loading.present();
this.materiaservice.getmateria(this.materiaId).subscribe(res=>{
  loading.dismiss();
  this.materia=res;
});
}
async saveMateria(){
  const loading= await this.loadingcontroller.create({
    message:'guardando.........'
  });
  await loading.present();
  this.calcularpromedio();
  if(this.materiaId){
    //update
 
    this.materiaservice.updateMateria(this.materia,this.materiaId).then(()=>{
      loading.dismiss();
      this.nav.navigateForward('/')
    });
  }else{
    //add new
    
    this.materiaservice.addmateria(this.materia).then(()=>{
      loading.dismiss();
      this.nav.navigateForward('/')
    });
  }
}
 calcularpromedio(){
    var promedio:number;
    promedio=(this.materia.nota1corte*0.3)+(this.materia.nota2corte*0.3)+(this.materia.nota3corte*0.4);
    this.materia.definitiva = promedio;
 }

 deleteMateria(idmateria : string){
  
  this.materiaservice.removoMateria(idmateria);
 }
}

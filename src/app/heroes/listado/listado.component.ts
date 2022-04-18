import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  HeroeBorrado:string|undefined = ''

  BorrarHeroe() {
    this.HeroeBorrado = this.heroes.shift();
  }
  // MostrarDiv(){
  //   if (this.HeroeBorrado==""){
  //     return false
  //   }
  // }

}

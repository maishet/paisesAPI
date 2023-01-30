import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService){}

  buscarPorCapital(termino:string){
      
      this.hayError = false;
      this.termino = termino; // establecer el termino de busqueda en el componente
  
      this.paisService.buscarCapital( termino ).subscribe( paises => {
  
        console.log(paises);
        this.paises = paises;
  
      }, (error) => {
  
        this.hayError = true;
        this.paises = [];
      });
  }

}

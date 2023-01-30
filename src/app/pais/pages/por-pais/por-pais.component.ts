import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  buscarPorPais(termino:string): void{

    this.mostrarSugerencias = false;

    console.log(this.termino);
    this.hayError = false;
    this.termino = termino; // establecer el termino de busqueda en el componente
    this.paisService.buscarPais( termino ).subscribe( paises => {

      console.log(paises);
      this.paises = paises;

    }, (error) => {

      this.hayError = true;
      this.paises = [];    }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino ).subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, (error) => {
      this.paisesSugeridos = [];
    }
    );
  }

  buscarSugerido(termino: string) {
    this.buscarPorPais(termino);
  }

}

import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  paises: Pais[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private paisService: PaisService){}

  buscarPorRegion(region:string){
    this.paisService.buscarRegion( region )
    .subscribe( paises => {

        console.log(paises);
        this.paises = paises;

    });
  }

  activarRegion(region: string) {
      
      if (region === this.regionActiva) { return; }
  
      this.regionActiva = region;
      this.paises = [];
  
      this.buscarPorRegion(region);
  

  }

}

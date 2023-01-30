import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';
import { Pais } from '../../interfaces/pais';

import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { } //suscribirse a los cambios de la ruta

  pais !: Pais; // puede ser nulo

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),  //retorna un observable de tipo Pais
        tap( console.log ) // tap es un operador de rxjs que me permite hacer un efecto secundario
      )
      .subscribe( (pais => this.pais = pais[0]) ); // asigno el pais al atributo pais de la clase

    // this.activateRoute.params // suscribirse a los cambios de los parametros
    //   .subscribe( ({id}) => {
    //     console.log(id);  //obtengo el id del pais del parametro de la ruta

    //     this.paisService.getPaisPorAlpha(id) //es un observable de tipo Pais
    //       .subscribe( pais => {
    //         console.log(pais);
    //       }
    //     );

    //   }
    // );
  }

}

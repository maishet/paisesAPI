import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input('data-pais-tabla')
  paises: Pais[] = [];



}

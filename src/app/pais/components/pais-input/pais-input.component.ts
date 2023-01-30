import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); // emite en el evento onEnter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // emite en el evento onDebounce
  @Input() placeholder: string = '';

  termino: string = '';

  debouncer: Subject<string> = new Subject(); // emite un evento cada vez que se presiona una tecla

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  


}

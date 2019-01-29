import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  /**
   * @param input faz referencia no componente html === input.valid
   */
  input: any
  /**
   * @param label e @param errorMessage são referenciados de fora
   */
  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean =true

  /**
   * @ContentChild(NgModel) esta pegando a e injetando na referencia
   */
  @ContentChild(NgModel) model: NgModel

  /* usando a diretiva do FormsGroup */

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {  
  }
  /**
   * criado com a implementação  AfterContentInit
   * Metodo chamado quando o conteudo for definido
   */
  ngAfterContentInit(): void {

/*     se a diretiva ngModel não estiver disponivel procurar por formControlName */
    this.input = this.model || this.control

    if (this.input === undefined) {
      throw new Error("Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName");
    } else {

    }

  }

  /**
   * Validação dos campos
   */
  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched)

  }
}

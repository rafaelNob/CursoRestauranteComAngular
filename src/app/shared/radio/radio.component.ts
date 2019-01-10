import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=> RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements OnInit,ControlValueAccessor {
 
  @Input() options: RadioOption[]

  value:any
  onChange: any
  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
    this.onChange(value)
  }
  /**
   * Método que é chamado pelas diretivas quando elas querem passar o valor 
   * para o componente
   */
  writeValue(obj: any): void {
    this.value = obj
   
  }

  /**ele passa a função sempre que o valor interno mudar
   */
  registerOnChange(fn: any): void {
    this.onChange = fn
    
  }
  registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
   
  }

}

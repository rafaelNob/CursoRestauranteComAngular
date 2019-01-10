import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions:RadioOption[] =[
    {
    label: 'Dinheiro',
    value:'MON'
    },
    {
      label: 'Cartão de Débito',
      value:'DEB'
    },
    {
      label: 'Cartão de Refeição',
      value:'REF'
    }
]

  constructor() { }

  ngOnInit() {
  }

}

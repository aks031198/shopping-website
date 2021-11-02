import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  inputs: ['cart'],
})
export class CartComponent implements OnInit {
  @Input() cart: any;
  total: number;
  constructor() {
    this.cart = [];
    this.total = 0;
  }
  ngOnInit(): void {}
  calc_total() {
    this.total = 0;
    for (let c of this.cart) this.total += parseInt(c.price);
    return this.total;
  }
  remove_item(i: number) {
    window.scroll(0,0);
    this.cart.splice(i, 1);
  }
}


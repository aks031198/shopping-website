import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'shopping-website';
  item: any;
  cart: Array<string> = [];
  home: number = 1;
  cart_page: number = 0;
  added(e: any, product: any) {
    if (e.target.checked === true) {
      product.status = 'Added to Cart';
      this.cart.push(product);
      console.log(this.cart);
    } else {
      product.status = 'Add to Cart';
      const index = this.cart.indexOf(product.id);
      this.cart.splice(index, 1);
      console.log(this.cart);
    }
  }
  go_to_cart() {
    window.scroll(0,0);
    this.home = 0;
    this.cart_page = 1;
  }
  constructor(private http: HttpClient) {
    this.item = [];
  }
  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe((data) => {
      this.item = data;
    });
  }
  getItems() {
    return this.cart;
  }
}

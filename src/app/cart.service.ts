import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];

  constructor() {}

  addToCart(detail: any) {
    this.items.push(detail);
  }

  getItems() {
    return this.items;
  }

  // total(detail: any) {
  //   var total = 0;
  //   this.items.forEach((detail: any) => {
  //     total += detail.price;
  //     console.log(total);
  //   });
  //   return total;
  // }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

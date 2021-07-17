import { Component, OnInit } from '@angular/core';
import { details } from '../details';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit {
  details = details;
  constructor(private cartService: CartService) {}

  addToCart(detail: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(detail);
    // this.cartService.total(detail);
  }

  ngOnInit(): void {}
}

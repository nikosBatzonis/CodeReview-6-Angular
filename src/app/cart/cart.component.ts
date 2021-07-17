import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  sum: number = 0;
  percents: number = 0;
  pricePercent: string = '';
  items: any;
  checkoutForm: any;
  detail: any;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      fname: '',
      lname: '',
      address: '',
      tel: '',
      email: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    var a: number = 0;
    for (let val of this.items) {
      a += val.price;
    }
    this.sum = a;
    if (this.sum > 1000 && this.sum < 3000) {
      this.percents = this.sum * 0.9;
      this.pricePercent = '10%';
    } else if (this.sum > 3000) {
      this.percents = this.sum * 0.8;
      this.pricePercent = '20%';
    } else {
      this.pricePercent = '0%';
    }
  }

  onSubmit(data: any) {
    if (this.items.length === 0) {
      alert('Your cart is empty!');
    } else if (data.fname === '') {
      alert('Please fill out your First name!');
    } else if (data.lname === '') {
      alert('Please fill out your Last name!');
    } else if (data.address === '') {
      alert('Please fill out your adress!');
    } else if (data.tel === '') {
      alert('Please fill out your Phone Number!');
    } else if (data.email === '') {
      alert('Please fill out your email!');
    } else if (this.items.length > 0) {
      console.warn('Your order has been submitted', data);
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      this.sum = 0;
      this.percents = 0;
      this.pricePercent = '0%';
    }
  }
  onClick() {
    this.items = this.cartService.clearCart();
    this.sum = 0;
    this.percents = 0;
    this.pricePercent = '0%';
  }
}

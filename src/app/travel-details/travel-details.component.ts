import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from '../details';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css'],
})
export class TravelDetailsComponent implements OnInit {
  detail: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(detail: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(detail);
    //this.cartService.total(detail);
    console.log(detail);
  }

  // totalCost() {
  //   this.cartService.total();
  // }
  // total(detail: any) {
  //   var total = 0;
  //   detail.forEach((element: any) => {
  //     total += element.price;
  //     console.log(total);
  //   });
  //   return total;
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: any = params.get('info');
      this.detail = details[id];
    });
  }
}

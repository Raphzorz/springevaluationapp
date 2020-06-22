import {Component, OnInit} from '@angular/core';
import {ProductBaskets} from "../models/product-baskets.model";
import {Subscription} from "rxjs/internal/Subscription";
import {EcommerceService} from "../services/EcommerceService";

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css',]
})
export class BasketsComponent implements OnInit {
  baskets: ProductBaskets;
  productId: number;
  paid: boolean;
  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
    this.baskets = this.ecommerceService.ProductBaskets;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.BasketsChanged.subscribe(() => {
      this.baskets = this.ecommerceService.ProductBaskets;
    });
  }

}

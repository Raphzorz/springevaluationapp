import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {BasketsComponent} from "./baskets/baskets.component";
import {} from "../app.component";

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  collapsed = true;
  basketFinished = false;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('basketsC')
  basketsC: BasketsComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishBasket(basketFinished: boolean) {
    this.basketFinished = basketFinished;
  }

  reset() {
    this.basketFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.basketsC.paid = false;
  }
}

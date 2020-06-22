import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductBaskets} from "../models/product-baskets.model";
import {ProductBasket} from "../models/product-basket.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {Product} from "../models/product.model";
import {User} from "../models/users.model";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  @Output() myEvent = new EventEmitter();
  basketFinished: boolean;
  baskets: ProductBaskets;
  sub: Subscription;
  user: User;
  products: Product[] = [];
  listOfAlreadyPurchasedProducts: Product[] = [];
  @Output() onBasketFinished: EventEmitter<boolean>;
  safeToSave: boolean = false;

  constructor(private ecommerceService: EcommerceService) {
    this.basketFinished = false;
    this.onBasketFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.baskets = new ProductBaskets();
    this.loadCart();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  //Removes an item from the cart
  removeFromCart(productBasket: ProductBasket) {
    let index = this.getProductIndex(productBasket.product);
    if (index > -1) {
      this.ecommerceService.ProductBaskets.productBaskets.splice(
        this.getProductIndex(productBasket.product), 1);
    }
  }

  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductBaskets.productBaskets.findIndex(
      value => value.product === product);
  }

  // This method is triggered whenever the ProductBasketChanged method is triggered
  loadCart() {
    this.user = this.ecommerceService.loggedUser;
    this.sub = this.ecommerceService.ProductBasketChanged.subscribe(() => {
      let productBasket = this.ecommerceService.SelectedProductBasket;
      if (productBasket) {
        if ((this.baskets.productBaskets))
          this.baskets.productBaskets.push(new ProductBasket(
            productBasket.product, this.ecommerceService.loggedUser));
        //NB: This.baskets.productBaskets contains the User & The Product
      }
      //this.baskets or ProductBaskets are the list of items in the cart.
      this.ecommerceService.ProductBaskets = this.baskets;
      this.baskets = this.ecommerceService.ProductBaskets;
    });
  }

  //Checks the user's purchase history and does not allow them to purchase the same product twice
  checkBeforeSaveToBasket() {
    this.safeToSave = false;
    this.listOfAlreadyPurchasedProducts = [];
    this.ecommerceService.checkForPreviousPurchases(this.baskets).subscribe(
      (products: any[]) => {
        this.products = products;

        this.products.forEach(product => {
            this.listOfAlreadyPurchasedProducts.push(product);
          }
        )
        // If there are already purchased products then the basket shall be cancelled

        if (this.listOfAlreadyPurchasedProducts.length < 1) {
          this.safeToSave = true;
        }
        this.saveToBasket();
      }
      ,
      (error) => console.log(error),
    );

  }

  // If none of the items have been found in past purchases, this will trigger and save to basket
  saveToBasket() {
    if (this.safeToSave == true) {
      this.ecommerceService.saveBasket(this.baskets).subscribe();
      const sucessdiv = document.getElementById("success")
      sucessdiv.classList.remove("d-none");
      this.reset();
    }
  }

  reset() {
    this.basketFinished = false;
    this.baskets = new ProductBaskets();
    this.baskets.productBaskets = []
    this.ecommerceService.ProductBaskets.productBaskets = []
  }
}

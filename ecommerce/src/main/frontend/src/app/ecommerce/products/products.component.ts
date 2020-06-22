import {Component, OnInit} from '@angular/core';
import {ProductBasket} from "../models/product-basket.model";
import {EcommerceService} from "../services/EcommerceService";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductBaskets} from "../models/product-baskets.model";
import {Product} from "../models/product.model";
import {User} from "../models/users.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productBaskets: ProductBasket[] = [];
  products: Product[] = [];
  toAddToCartList = [];
  selectedProductBasket: ProductBasket;
  private shoppingCartBaskets: ProductBaskets;
  sub: Subscription;
  productSelected: boolean = false;
  name: string = "";
  selectedOption: string;
  selectedCategory: string = 'All'
  user: User;


  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.productBaskets = [];
    this.loadProducts();
    this.loadBaskets();
  }

  keyListener() {
    document.getElementById('search-bar').addEventListener('keypress', e => this.validateTextField(e));
  }
  // Regex
  validateTextField(event) {
    var regex = new RegExp("^[a-zA-Z\\s]*$/*");
    const element = document.getElementById("search-bar");
    if (!regex.test(event.key)) {
      event.preventDefault();
      element.classList.add("error-class");
      return false;
    } else {
      element.classList.remove("error-class");
    }
  }


  filter = false;

  addCheckedItemsToCart() {

    // This triggers if the user has made a purchase earlier
    const sucessdiv = document.getElementById("success")
    if (!sucessdiv.classList.contains("d-none")) {
      sucessdiv.classList.add("d-none")
    }

    //First checking what products there are in the cart so as not to add duplicates.

    var triggered = false;

    var listOfCardIds = this.checkCartForDuplicates();

    let i;
    for (i = 0; i < this.toAddToCartList.length; ++i) {
      // Remove the checked state of the checkboxes that have been added
      triggered = false;
      let j;
      for (j = 0; j < listOfCardIds.length; ++j) {

        if (listOfCardIds[j] == this.toAddToCartList[i].product.id) {
          // this.toAddToCartList.splice(i,1)
          triggered = true;
          break;
        }
      }
      // @ts-ignore
      document.getElementById(this.toAddToCartList[i].product.id).checked = false;
      document.getElementById("tr-" + this.toAddToCartList[i].product.id).classList.remove("selected-class");
      if (!triggered) {
        this.addToCart(this.toAddToCartList[i]);
      }

    }
    // Clear cart after adding to basket
    this.toAddToCartList = [];

  }

  checkCartForDuplicates() {
    var listOfCartIds = [];
    let j;
    for (j = 0; j < this.ecommerceService.ProductBaskets.productBaskets.length; ++j) {
      listOfCartIds.push(this.ecommerceService.ProductBaskets.productBaskets[j].product.id)
    }
    return listOfCartIds;
  }

  addToCart(basket: ProductBasket) {

    this.ecommerceService.SelectedProductBasket = basket;
    this.selectedProductBasket = this.ecommerceService.SelectedProductBasket;
    this.productSelected = true;
  }


  getProductIndex(product: Product): number {
    return this.ecommerceService.ProductBaskets.productBaskets.findIndex(
      value => value.product === product);
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productBaskets.push(new ProductBasket(product, this.user));
          })
        },
        (error) => console.log(error)
      );
  }

  // Products are added to this "virtual" list (not seen by the user) before being added to the cart
  addToCartPreemptiveList(product) {
    const element = document.getElementById("tr-" + product.product.id);
    if (!this.toAddToCartList.includes(product)) {
      element.classList.add("selected-class");
      this.toAddToCartList.push(product);
      return;
    } else {
      element.classList.remove("selected-class");
      this.toAddToCartList.splice(this.toAddToCartList.indexOf(product), 1)
    }
  }


  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedCategory = event.target.value;
  }

  loadFilteredProducts(keyword) {

    //  First remove the checked products so as not to be able to add unseen products
    this.toAddToCartList = [];
    this.ecommerceService.getProductByKeyword(keyword, this.selectedCategory)
      .subscribe(
        (products: any[]) => {
          this.products = products;
          // Delete the list before adding the item
          this.productBaskets = [];
          this.products.forEach(product => {
            this.productBaskets.push(new ProductBasket(product, this.user));
          })
        },
        (error) => console.log(error)
      );
  }

  loadBaskets() {
    this.sub = this.ecommerceService.BasketsChanged.subscribe(() => {
      this.shoppingCartBaskets = this.ecommerceService.ProductBaskets;
    });
  }

  reset() {
    this.productBaskets = [];
    this.loadProducts();
    this.ecommerceService.ProductBaskets.productBaskets = [];
    this.loadBaskets();
    this.productSelected = false;
  }

}

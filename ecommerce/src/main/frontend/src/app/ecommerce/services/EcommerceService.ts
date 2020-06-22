import {ProductBasket} from "../models/product-basket.model";
import {Subject} from "rxjs/internal/Subject";
import {ProductBaskets} from "../models/product-baskets.model";
import {User} from "../models/users.model";
import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

//This class takes care of the communications between the backend & frontend

@Injectable()
export class EcommerceService {
  private productsUrl = "/api/products";
  private basketsUrl = "/api/baskets";
  private saveUsersUrl = "/api/users/save-user?userName=";
  private getUserNameUrl = "/api/users/get-user-by-name?userName=";
  private keywordSearchUrl = "/api/products/filter-products?keyword=";

  private productBasket: ProductBasket;

  loggedUser: User;
  //Product Baskets is the list of items in the cart
  private baskets: ProductBaskets = new ProductBaskets();

  private productBasketSubject = new Subject();
  private basketsSubject = new Subject();
  private users = new Subject();

  ProductBasketChanged = this.productBasketSubject.asObservable();
  BasketsChanged = this.basketsSubject.asObservable();


  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  getUserByName(userName) {
    return this.http.get<User>(this.getUserNameUrl + userName);
  }

  getProductByKeyword(keyword, category) {
    return this.http.get(this.keywordSearchUrl + keyword + "&category=" + category);
  }

  checkForPreviousPurchases(basket: ProductBaskets) {
    return this.http.post(this.basketsUrl + "/check", basket)
  }

  saveBasket(basket: ProductBaskets) {
    return this.http.post(this.basketsUrl, basket);
  }

  set SelectedProductBasket(value: ProductBasket) {
    this.productBasket = value;
    this.productBasketSubject.next();
  }

  get SelectedProductBasket() {
    return this.productBasket;
  }

  set ProductBaskets(value: ProductBaskets) {
    this.baskets = value;
    this.basketsSubject.next();
  }

  get ProductBaskets() {
    return this.baskets;
  }


}

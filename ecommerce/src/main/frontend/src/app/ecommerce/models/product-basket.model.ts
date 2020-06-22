import {Product} from "./product.model";
import {User} from "./users.model";

export class ProductBasket {
  product: Product;
  user: User;

  constructor(product: Product, user: User) {
    this.product = product;
    this.user = user;
  }
}

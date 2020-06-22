export class Product {
  id: number;
  productName: string;
  productType: string;

  constructor(id: number, productName: string, productType: string) {
    this.id = id;
    this.productName = productName;
    this.productType = productType;
  }
}

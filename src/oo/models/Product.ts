export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPriceByTax(taxRate: number): number {
    return this.price * (1 + taxRate);
  }
}
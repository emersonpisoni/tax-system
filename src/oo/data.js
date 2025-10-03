import { Product } from "./models/Product";
import { State } from "./models/State";
import { TaxRate } from "./models/TaxRate";

const apple = new Product("apple", 3.5);
const banana = new Product("banana", 2.0);
const orange = new Product("orange", 4.0);
const grape = new Product("grape", 5.0);
const mango = new Product("mango", 6.0);

export const products = [apple, banana, orange, grape, mango];

const ohioTaxRates = [
  new TaxRate(0.058, 2025),
  new TaxRate(0.0575, 2024),
  new TaxRate(0.055, 2023),
  new TaxRate(0.0525, 2022),
  new TaxRate(0.05, 2021),
  new TaxRate(0.0475, 2020),
];

const ohio = new State("Ohio", ohioTaxRates);

const californiaTaxRates = [
  new TaxRate(0.0548, 2025),
  new TaxRate(0.056, 2024),
  new TaxRate(0.0575, 2023),
  new TaxRate(0.06, 2022),
  new TaxRate(0.0625, 2021),
  new TaxRate(0.0725, 2020),
];

const california = new State("California", californiaTaxRates);

const texasTaxRates = [
  new TaxRate(0.0625, 2025),
  new TaxRate(0.0630, 2024),
  new TaxRate(0.0625, 2023),
  new TaxRate(0.0644, 2022),
  new TaxRate(0.0712, 2021),
  new TaxRate(0.0846, 2020),
];

const texas = new State("Texas", texasTaxRates);

const newYorkTaxRates = [
  new TaxRate(0.0451, 2025),
  new TaxRate(0.0433, 2024),
  new TaxRate(0.0400, 2023),
  new TaxRate(0.0380, 2022),
  new TaxRate(0.0375, 2021),
  new TaxRate(0.0350, 2020),
];

const newYork = new State("New York", newYorkTaxRates);

export const states = [ohio, california, texas, newYork];
import type { TaxRate } from "./TaxRate";

export class State {
  name: string;
  taxRates: TaxRate[];

  constructor(name: string, taxRates: TaxRate[]) {
    this.name = name;
    this.taxRates = taxRates;
  }

  getTaxRateByYear(year: number): number | null {
    const taxRate = this.taxRates.find((rate) => rate.year === year);
    return taxRate ? taxRate.rate : null;
  }

  getAvailableYears(): number[] {
    return this.taxRates.map((rate) => rate.year);
  }
}
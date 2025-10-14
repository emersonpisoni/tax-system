import { describe, expect, it } from "vitest";
import { State } from "../oo/models/State";
import { TaxRate } from "../oo/models/TaxRate";

describe("State", () => {
  it("should return correct tax rate for a given year", () => {
    const taxRates = [
      new TaxRate(0.05, 2020),
      new TaxRate(0.06, 2021),
      new TaxRate(0.07, 2022),
    ];

    const state = new State("San Francisco", taxRates);

    expect(state.getTaxRateByYear(2020)).toBe(0.05);
    expect(state.getTaxRateByYear(2021)).toBe(0.06);
    expect(state.getTaxRateByYear(2022)).toBe(0.07);
    expect(state.getTaxRateByYear(2022)).not.toBe(0.1);
    expect(state.getTaxRateByYear(2019)).toBeNull();
  })
})
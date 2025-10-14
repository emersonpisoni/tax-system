import { describe, expect, it } from "vitest";
import { Product } from "../oo/models/Product";

describe("Product", () => {
  it("should calculate price with tax correctly", () => {
    const product = new Product("Test Product", 100);
    const taxRate = 0.2;
    const priceWithTax = product.getPriceByTax(taxRate);

    expect(priceWithTax).toBe(120);
  });
})
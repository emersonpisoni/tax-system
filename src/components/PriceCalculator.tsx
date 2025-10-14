import { useEffect, useState } from "react";
import { products, states } from "../oo/data";
import type { State } from "../oo/models/State";

export default function PriceCalculator() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedState, setSelectedState] = useState<State>();
  const [selectedYear, setSelectedYear] = useState<number>();
  const [finalPrice, setFinalPrice] = useState<number | null>();

  useEffect(() => {
    if (selectedProduct && selectedState && selectedYear) {
      const product = products.find((p) => p.name === selectedProduct);
      const taxRate = selectedState.getTaxRateByYear(selectedYear)

      if (!product || !taxRate) return

      const priceWithTax = product.getPriceByTax(taxRate);
      setFinalPrice(priceWithTax);
    } else {
      setFinalPrice(null);
    }
  }, [selectedProduct, selectedState, selectedYear]);

  useEffect(() => {
    console.log("Component has hydrated");
  }, []);

  return (
    <div>
      <h2>Price Calculator</h2>
      <div className="select-container">
        Product:
        <select onChange={(e) => setSelectedProduct(e.target.value)} value={selectedProduct}>
          <option value="" disabled>Select a product</option>
          {
            products.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))
          }
        </select>
        <select
          value={selectedState?.name || ""}
          onChange={(e) => {
            const state = states.find((s) => s.name === e.target.value);
            setSelectedState(state);
          }}
        >
          <option value="" disabled>Select a state</option>
          {
            states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))
          }
        </select>
        <select onChange={(e) => setSelectedYear(Number(e.target.value))} value={selectedYear}>
          <option value="" disabled>Select a year</option>
          {
            selectedState?.getAvailableYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            )) || <option>Select a state first</option>
          }
        </select>
        {finalPrice && (
          <div className="result">
            Final Price: ${finalPrice.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}
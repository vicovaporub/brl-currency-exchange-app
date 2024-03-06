"use client";
import { useState } from "react";
import { BrlValue } from "./BrlValue";
import { GeneralCurrencies } from "./GeneralCurrencies";
import { ConvertComponent } from "./ConvertComponent";

export const AppContainer = () => {
  const [currencyValue, setCurrencyValue] = useState(``);

  return (
    <div className="sm:flex sm:justify-center sm:items-center border border-gray-800">
      <BrlValue />
      <ConvertComponent setCurrencyValue={setCurrencyValue} />
      <GeneralCurrencies currencyValue={currencyValue} />
    </div>
  );
};

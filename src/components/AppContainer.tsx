"use client";
import { useState } from "react";
import { BrlValue } from "./BrlValue";
import { GeneralCurrencies } from "./GeneralCurrencies";

export const AppContainer = () => {
  const [currencyValue, setCurrencyValue] = useState(``);

  return (
    <div className="flex justify-center items-center border border-gray-800">
      <BrlValue setCurrencyValue={setCurrencyValue} />
      <GeneralCurrencies currencyValue={currencyValue} />
    </div>
  );
};

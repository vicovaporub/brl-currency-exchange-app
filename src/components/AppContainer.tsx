"use client";
import { useState } from "react";
import { BrlValue } from "./BrlValue";
import { GeneralCurrencies } from "./GeneralCurrencies";
import { ConvertComponent } from "./ConvertComponent";

export const AppContainer = () => {
  const [conversionValue, setConversionValue] = useState(``);
  const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState(``);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center space-x-4 mt-[10rem] sm:mr-[4.5rem]">
      <BrlValue />
      <ConvertComponent
        setCurrencyValue={setConversionValue}
        setSelectedCurrencySymbol={setSelectedCurrencySymbol}
      />
      <GeneralCurrencies
        currencyValue={conversionValue}
        selectedCurrencySymbol={selectedCurrencySymbol}
      />
    </div>
  );
};

"use client";
import { BrlValue } from "./BrlValue";
import { GeneralCurrencies } from "./GeneralCurrencies";

export const AppContainer = () => {
  return (
    <div className="flex justify-center border border-gray-800">
      <BrlValue />
      <GeneralCurrencies />
    </div>
  );
};

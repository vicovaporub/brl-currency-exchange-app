"use client";

import { fetchCurrencies } from "@/api/fetches";

export const BrlValue = ({ setCurrencyValue }: any) => {
  const convertToggle = () => {
    let inputValue = document.getElementById("brlValue") as HTMLInputElement;
    if (
      inputValue.value === "" ||
      inputValue.value === null ||
      isNaN(parseInt(inputValue.value)) ||
      parseInt(inputValue.value) < 0
    ) {
      alert("Please input a valid value");
      inputValue.value = "";
      return;
    } else {
      fetch("mockApi.json")
        .then((response) => response.json())
        .then((data) => {
          const valueToConvert = parseFloat(inputValue.value);
          const brlToUsd = 1 / data.data.BRL;

          const conversion = valueToConvert * brlToUsd;
          console.log(conversion.toFixed(2).toString());
          setCurrencyValue(conversion.toFixed(2));
        });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="text-center">
          Input a value
          <br /> in BRL here
        </h1>
        <div className="flex justify-center mt-2">
          <input
            id="brlValue"
            className="border rounded-lg text-end border-gray-400 w-1/2 p-2"
            placeholder="R$"
          />
        </div>
      </div>
      <button
        onClick={convertToggle}
        className="h-[3.2rem] p-3 flex justify-center border rounded-lg
         border-gray-400 bg-blue-900 hover:bg-blue-800 text-white"
      >
        Convert
      </button>
    </>
  );
};

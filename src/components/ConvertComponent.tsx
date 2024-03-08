import { fetchMockCurrencies } from "@/pages/api/fetchMockCurrencies";
import { CurrencyClass } from "@/shared/CurrencyClass";
import { CurrencyType } from "@/types/CurrencyType";
import { useEffect, useState } from "react";

async function fetchData() {
  const response = await fetch("/api/fetchCurrencyData");
  const data = await response.json();
  return new CurrencyClass(data.data);
}

export const ConvertComponent = ({
  setCurrencyValue,
  setSelectedCurrencySymbol,
}: {
  setCurrencyValue: (value: string) => void;
  setSelectedCurrencySymbol: (symbol: string) => void;
}) => {
  const [currenciesForSelect, setCurrenciesForSelect] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyAndValues, setCurrencyAndValues] = useState<CurrencyType[]>(
    []
  );
  const [brlRateToSelectedCurrency, setBrlRateToSelectedCurrency] =
    useState("");

  useEffect(() => {
    const fetchAndSetCurrencyData = async () => {
      try {
        const data = await fetchData(); //if you do not have an api key, you can use the fetchMockCurrencies() function instead of fetchData()
        setCurrencyAndValues(data.data);

        const currencyNames = data.data.map((currency) => currency.currency);
        setCurrenciesForSelect(currencyNames);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchAndSetCurrencyData();
  }, []);

  const brlValue = currencyAndValues.filter(
    (currency) => currency.currency === "BRL"
  )[0]?.value;

  const usdValue = currencyAndValues.filter(
    (currency) => currency.currency === "USD"
  )[0]?.value;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currencyToConvert = e.target.value;
    setSelectedCurrency(currencyToConvert);
    setSelectedCurrencySymbol(currencyToConvert);
    setCurrencyValue("");

    const selectedCurrencyData = currencyAndValues.find(
      (currency) => currency.currency === currencyToConvert
    );

    if (selectedCurrencyData) {
      const brlToSelectedCurrency = (
        (usdValue / brlValue) *
        selectedCurrencyData.value
      ).toFixed(2);
      console.log(brlToSelectedCurrency);
      setBrlRateToSelectedCurrency(brlToSelectedCurrency);
    }
  };

  const convertToggle = () => {
    const inputValue = document.getElementById("brlValue") as HTMLInputElement;
    if (
      inputValue.value === "" ||
      inputValue.value === null ||
      isNaN(parseFloat(inputValue.value)) ||
      parseFloat(inputValue.value) < 0
    ) {
      alert("Please input a valid value");
      inputValue.value = "";
      return;
    } else if (selectedCurrency === "") {
      alert("Please select a currency");
      return;
    } else {
      const selectedCurrencyData = currencyAndValues.filter(
        (currency) => currency.currency === selectedCurrency
      )[0];

      const inputValueToDollar = parseFloat(inputValue.value) / brlValue;

      const currencyValueToOneDollar = selectedCurrencyData.value;

      const convertion = (
        inputValueToDollar * currencyValueToOneDollar
      ).toFixed(2);
      setCurrencyValue(`${convertion}`);
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto pr-[2rem] items-center">
      <select
        className="h-7   mt-3 border rounded-lg border-gray-400"
        id="currencies"
        onChange={handleSelectChange}
        value={selectedCurrency}
      >
        <option value="" disabled>
          Select a currency
        </option>
        {currenciesForSelect.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <button
        onClick={convertToggle}
        className="h-[3.2rem] p-3 flex w-[7rem] mt-3 justify-center border rounded-lg
      border-gray-400 bg-blue-900 hover:bg-blue-800 text-white"
      >
        Convert
      </button>
      <div className="mt-2 p-[3px]">
        {selectedCurrency ? (
          <span className="text-lg font-semibold ">{`1 BRL = ${brlRateToSelectedCurrency} ${selectedCurrency}`}</span>
        ) : null}
      </div>
    </div>
  );
};

import { fetchMockCurrencies } from "@/api/fetches";
import { useEffect, useState } from "react";

export const ConvertComponent = ({
  setCurrencyValue,
  setSelectedCurrencySymbol,
}: any) => {
  const [currenciesForSelect, setCurrenciesForSelect] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyAndValues, setCurrencyAndValues] = useState<any[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await fetchMockCurrencies();
        setCurrencyAndValues(data.data);

        const currencyNames = data.data.map((currency) => currency.currency);
        setCurrenciesForSelect(currencyNames);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleSelectChange = async (e: any) => {
    const currencyToConvert = e.target.value;
    setSelectedCurrency(currencyToConvert);
    setSelectedCurrencySymbol(currencyToConvert);
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

      const brlValue = currencyAndValues.filter(
        (currency) => currency.currency === "BRL"
      )[0].value;

      const inputValueToDollar = parseFloat(inputValue.value) / brlValue;

      const currencyValueToOneDollar = selectedCurrencyData.value;

      const convertion = (
        inputValueToDollar * currencyValueToOneDollar
      ).toFixed(2);
      setCurrencyValue(`${convertion} ${selectedCurrency}`);
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto items-center">
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
        className="h-[3.2rem] p-3 flex w-[9.8rem] mt-3 justify-center border rounded-lg
      border-gray-400 bg-blue-900 hover:bg-blue-800 text-white"
      >
        Convert
      </button>
    </div>
  );
};

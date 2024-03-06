import { CurrencyClass } from "@/shared/CurrencyClass";

export const fetchCurrencies = async () => {
  const apiKey = process.env.NEXT_PUBLIC_CURRENCY_API_KEY;
  const response = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`
  );
  const data = await response.json();

  return data;
};

export const fetchMockCurrencies = async () => {
  const response = await fetch("mockApi.json");
  const data = await response.json();
  return new CurrencyClass(data.data);
};

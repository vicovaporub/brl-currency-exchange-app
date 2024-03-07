import { CurrencyClass } from "@/shared/CurrencyClass";

//This next function is used to fetch the mock data from the mockApi.json file
//it was used on tests and on the development of the app
//it is not used on the production version of the app

export const fetchMockCurrencies = async () => {
  const response = await fetch("mockApi.json");
  const data = await response.json();
  return new CurrencyClass(data.data);
};

export const GeneralCurrencies = ({
  currencyValue,
  selectedCurrencySymbol,
}: any) => {
  return (
    <div className="rounded-lg p-6 m-5">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        {selectedCurrencySymbol ? (
          <span>
            The value
            <br className="hidden sm:inline" /> in {selectedCurrencySymbol} is
          </span>
        ) : (
          <span>
            Select a currency
            <br className="hidden sm:inline" /> to convert
          </span>
        )}
      </h1>
      <div className="flex  sm:flex-row justify-center items-center">
        <span className="text-gray-600 mr-2">{selectedCurrencySymbol}</span>
        <input
          value={currencyValue}
          className="border rounded-lg text-end bg-blue-100 border-gray-400 w-1/2 p-2"
          disabled={true}
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export const GeneralCurrencies = ({ currencyValue }: any) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="text-center">
          The new
          <br /> value is
        </h1>
        <div className="flex justify-center mt-2">
          <input
            value={currencyValue}
            className="border rounded-lg text-end bg-white border-gray-400 w-1/2 p-2"
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

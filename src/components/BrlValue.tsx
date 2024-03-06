export const BrlValue = () => {
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
    </>
  );
};

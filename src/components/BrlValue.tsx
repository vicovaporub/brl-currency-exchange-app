export const BrlValue = () => {
  return (
    <div className="rounded-lg p-6 m-5">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Input a value
        <br className="hidden sm:inline" /> in BRL here
      </h1>
      <div className="flex sm:flex-row justify-center items-center">
        <span className="text-gray-600 mr-2">BRL</span>
        <input
          id="brlValue"
          className="border rounded-lg text-end border-gray-400 w-1/2 p-2 placeholder-gray-400"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

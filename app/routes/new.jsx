import { useState } from "react";

export default function New() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("Clicked");
  }
  console.log({ count });

  function reset() {
    setCount(0);
    console.log("Reset");
  }

  function decrease() {
    console.log("decrementing...");
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
    setCount(count - 1);
    console.log("decrease");
  }
  return (
    <main className="grid  place-items-center h-screen w-full">
      <div>
        <p className="text-center text-3xl">{count}</p>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={handleClick}
            className="mt-4 bg-slate-600 px-4 py-2 rounded-md text-white"
          >
            Increment
          </button>
          <button
            type="button"
            disabled={count <= 0}
            onClick={decrease}
            className="mt-4 bg-slate-600 px-4 py-2 rounded-md text-white disabled:bg-gray-600"
          >
            decrease
          </button>
          <button
            type="button"
            onClick={reset}
            className="mt-4 bg-red-900 px-4 py-2 rounded-md text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

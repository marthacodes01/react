import { useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  //Declare state vaiables for storing the form inputs
  let [day, setDay] = useState(null);
  let [month, setMonth] = useState(null);
  let [year, setYear] = useState(null);
  //Declare state variables for storing data differences
  let [dateDifference, setDateDifference] = useState(0);
  let [monthDifference, setMonthDifference] = useState(0);
  let [yearDifference, setYearDifference] = useState(0);
  //Declare state variables for errors
  let [dayError, setDayError] = useState(false);
  let [monthError, setMonthError] = useState(false);
  let [yearError, setYearError] = useState(false);

  console.log({ dayError });
  console.log({ monthError });
  console.log({ yearError });

  function handleClick() {
    setDayError(false);
    setDayError(false);
    setMonthError(false);

    let today = new Date();

    let currentDay = today.getDate();
    console.log({ currentDay });

    let currentMonth = today.getMonth();
    console.log({ currentMonth });

    let currentYear = today.getFullYear();
    console.log({ currentYear });

    if (day < 1 || Number(day) < 1 || Number(day) > 31) {
      setDayError(true);
      return;
    } // else {
    //   setDayError(false);
    // }
    if (month < 1 || Number(month) < 0 || Number(month) > 11) {
      setMonthError(true);
      return;
    } //else {
    //   setMonthError(false);
    // }

    if (year < 1 || Number(year) > currentYear) {
      setYearError(true);
      return;
    }
    //  else {
    //   setYearError(false);
    // }
    setDateDifference(currentDay - day);
    setMonthDifference(currentMonth - month);
    setYearDifference(currentYear - year);
  }

  console.log({ day });
  console.log({ month });
  console.log({ year });

  console.log({ dateDifference });
  console.log({ monthDifference });
  console.log({ yearDifference });

  return (
    <main className="max-w-4xl mx-auto">
      <div className="flex gap-4  py-3 px-4 mt-28 ">
        <div>
          <Label htmlFor="day">Day</Label>
          <Input id="day" value={day} setValue={setDay} hasError={dayError} />
          {dayError ? (
            <p className="text-red-600">Must be a valid day</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="month" hasError={monthError}>
            Month
          </Label>
          <Input
            id="month"
            value={month}
            setValue={setMonth}
            hasError={monthError}
          />
          {monthError ? (
            <p className="text-red-600">Must be a valid month</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="year" hasError={yearError}>
            year
          </Label>
          <Input
            id="year"
            value={year}
            setValue={setYear}
            hasError={yearError}
          />
          {yearError ? (
            <p className="text-red-600">Must be a valid year</p>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="mt-8 pr-4 rounded-md bg-purple-500 hover:bg-purple-300 transition ease-in-out px-4 py-2"
          onClick={handleClick}
        >
          Calculate
        </button>
      </div>
      <div>
        <Display numValue={yearDifference} textValue={"years"} />
        <Display numValue={monthDifference} textValue={"months"} />
        <Display numValue={dateDifference} textValue={"days"} />
      </div>
    </main>
  );
}
function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="uppercase">
      {children}
    </label>
  );
}
function Input({ id, value, setValue, hasError }) {
  return (
    <input
      type="number"
      id={id}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      className={`px-4 py-2 rounded-md text-black block border ${
        hasError ? "border-red-500" : "bg-slate-500"
      }`}
    />
  );
}

function Display({ numValue, textValue }) {
  return (
    <p className="font-bold text-7xl">
      <span className="text-purple-500">{numValue}</span>
      {textValue}
    </p>
  );
}

import { format } from "date-fns";
import { useMemo, useState } from "react";
import { DateComponent } from "./component/DateComponent";

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function firstDayInMonth(year: number, month: number) {
  return +format(new Date(year, month, 1), "c");
}

function App() {
  const today = new Date();
  const year = +format(today, "yyyy");
  const month = +format(today, "L");

  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [events, setEvents] = useState<Record<string, string[]>>({});
  const [activeDate, setActiveDate] = useState<string | null>(null);

  const currentMonthDays = useMemo(
    () => daysInMonth(currentYear, currentMonth),
    [currentYear, currentMonth],
  );
  const currentMonthStartDay = useMemo(
    () => firstDayInMonth(currentYear, currentMonth - 1),
    [currentYear, currentMonth],
  );

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div className="w-screen h-screen flex justify-center pt-2">
        <div className="flex flex-col space-y-5">
          <div className="w-full flex justify-end">
            <a className="p-2 text-white bg-gray-800">Github</a>
          </div>
          <div className="flex justify-center space-x-4 w-full">
            <div className="flex space-x-4 ">
              <button
                type="button"
                onClick={() => {
                  if (currentMonth == 1) {
                    setCurrentMonth(12);
                    setCurrentYear((prev) => prev - 1);
                  } else {
                    setCurrentMonth((prev) => prev - 1);
                  }
                }}
              >
                {"<"}
              </button>
              <div>
                <strong>Event calender</strong>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (currentMonth == 12) {
                    setCurrentMonth(1);
                    setCurrentYear((prev) => prev + 1);
                  } else {
                    setCurrentMonth((prev) => prev + 1);
                  }
                }}
              >
                {">"}
              </button>
            </div>
            <div>
              {currentYear}/{currentMonth}
            </div>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <div className="flex space-x-4">
              {daysArray.map((day) => (
                <div className="w-22 text-sm p-1 border">{day}</div>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 5 }, (_, i) => {
                return (
                  <div className="flex space-x-4" key={i}>
                    {Array.from({ length: 7 }, (_, j) => {
                      const dayIndex = i * 7 + j + 1 - currentMonthStartDay;
                      const currentDayString = `${currentYear}-${currentMonth}-${dayIndex + 1}`;
                      const eventOnDay = events[currentDayString];
                      if (dayIndex >= 0 && dayIndex < currentMonthDays)
                        return (
                          <DateComponent
                            eventOnDay={eventOnDay}
                            dayIndex={dayIndex}
                            dayString={currentDayString}
                            setActive={setActiveDate}
                            active={activeDate == currentDayString}
                            onEventAdd={(e: string) => {
                              setEvents((prev) => ({
                                ...prev,
                                [currentDayString]: [...(eventOnDay ?? []), e],
                              }));
                            }}
                            onEventDelete={(e: string) => {
                              setEvents((prev) => ({
                                ...prev,
                                [currentDayString]: eventOnDay.filter(
                                  (eve) => eve != e,
                                ),
                              }));
                            }}
                            events={eventOnDay}
                          />
                        );
                      return <div className="w-22 h-22 border p-1"></div>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

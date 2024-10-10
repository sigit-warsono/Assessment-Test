import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const changeMonth = (increment) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDayOfMonth(year, month);
    const today = new Date();
    console.log(today);

    const totalDays = 42; // 6 weeks
    const calendar = [];
    let day = 1;

    // Fill the initial empty days from the previous month
    for (let i = 0; i < startDay; i++) {
      const prevMonthDate = new Date(year, month, 0);
      prevMonthDate.setDate(prevMonthDate.getDate() - (startDay - i - 1));
      calendar.push(
        <div
          key={`prev-${prevMonthDate}`}
          className=" p-1 text-center text-gray-400"
        >
          {prevMonthDate.getDate()}
        </div>
      );
    }

    // Fill the days of the current month
    for (let i = 0; i < daysInMonth; i++) {
      const currentDay = new Date(year, month, day);
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;
      calendar.push(
        <div
          key={day}
          className={` p-1 text-center ${
            isToday ? "border rounded-full border-blue-600 text-blue-600" : ""
          }`}
        >
          {day}
        </div>
      );
      day++;
    }

    // Fill the remaining empty days from the next month
    const remainingDays = totalDays - calendar.length;
    for (let i = 0; i < remainingDays; i++) {
      const nextMonthDate = new Date(year, month + 1, i + 1);
      calendar.push(
        <div
          key={`next-${nextMonthDate}`}
          className="p-1 text-center text-gray-400"
        >
          {nextMonthDate.getDate()}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="w-[80%] mx-auto mt-1">
      <div className="flex justify-between items-center mb-4">
        {/* <button
          onClick={() => changeMonth(-1)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Prev Month
        </button> */}
        <IoChevronBackOutline
          className="cursor-pointer"
          onClick={() => changeMonth(-1)}
        />
        <h2 className="text-lg font-bold ">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        {/* <button
          onClick={() => changeMonth(1)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Next Month
        </button> */}
        <IoChevronForwardOutline
          className="cursor-pointer"
          onClick={() => changeMonth(1)}
        />
      </div>
      {/* <div className="mb-4">
        <h3 className="font-bold">Same Date Last Month:</h3>
        <p>{previousMonthDate.toDateString()}</p>
      </div> */}
      <div className="grid grid-cols-7 text-center mb-2">
        {days.map((day, index) => (
          <div key={index} className="font-extralight text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;

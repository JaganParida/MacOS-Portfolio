import React, { useState } from "react";
import MacWindow from "./MacWindow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./calendar.scss";

const Calendar = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  // Logic to get days in month and start day
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const renderDays = () => {
    const totalDays = getDaysInMonth(currentDate);
    const startDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const today = new Date();

    // Empty slots for previous month's days
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Actual days
    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      days.push(
        <div key={day} className={`day ${isToday ? "today" : ""}`}>
          <span className="day-number">{day}</span>
        </div>,
      );
    }
    return days;
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="60vw"
      height="70vh"
    >
      <div className="calendar-window">
        {/* Sidebar */}
        <div className="cal-sidebar">
          <div className="mini-month">
            <h3>{currentDate.getFullYear()}</h3>
            <div className="sidebar-months">
              {months.map((m, i) => (
                <div
                  key={m}
                  className={`month-item ${i === currentDate.getMonth() ? "active" : ""}`}
                  onClick={() =>
                    setCurrentDate(new Date(currentDate.getFullYear(), i, 1))
                  }
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Calendar View */}
        <div className="cal-main">
          <header>
            <div className="header-info">
              <h1>{months[currentDate.getMonth()]}</h1>
              <span className="year">{currentDate.getFullYear()}</span>
            </div>
            <div className="nav-controls">
              <button onClick={handlePrevMonth}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setCurrentDate(new Date())}>Today</button>
              <button onClick={handleNextMonth}>
                <ChevronRight size={18} />
              </button>
            </div>
          </header>

          <div className="weekdays-grid">
            {daysOfWeek.map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="days-grid">{renderDays()}</div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Calendar;

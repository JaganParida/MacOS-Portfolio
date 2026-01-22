import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weekday = now.toLocaleString("en-IN", { weekday: "short" });
  const day = now.getDate();
  const month = now.toLocaleString("en-IN", { month: "short" });
  const time = now
    .toLocaleString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  return (
    <div>
      {weekday} {day} {month} {time}
    </div>
  );
};

export default DateTime;

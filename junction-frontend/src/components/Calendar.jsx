import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <>
      <FullCalendar plugins={[daygridPlugin]} initialView="dayGridMonth" />
    </>
  );
};

export default Calendar;

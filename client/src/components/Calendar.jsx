import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarDays } from "lucide-react";
import "react-calendar/dist/Calendar.css";

function CalendarBox() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-3xl shadow-md border p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
          <CalendarDays className="text-blue-700" size={24} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">Calendar</h3>
          <p className="text-sm text-gray-500">
            Select task due date
          </p>
        </div>
      </div>

      <div className="calendar-wrapper">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="mt-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 text-center">
        <p className="text-sm text-gray-500">Selected Date</p>
        <h4 className="font-bold text-gray-800">
          {date.toDateString()}
        </h4>
      </div>
    </div>
  );
}

export default CalendarBox;
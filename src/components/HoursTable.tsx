import { CalendarDays, AlarmClockCheck } from "lucide-react";
import React from "react";

export default function HoursTable() {
  return (
    <table className="table-auto text-[--darktext] border-2 p-4 border-separate bg-[--background] rounded-lg indent-3 md:indent-7 leading-8 md:leading-10">
      <thead>
        <tr>
          <th>
            <div className="flex items-center justify-center">
              <CalendarDays />
            </div>
          </th>
          <th>
            <div className="flex items-center justify-center">
              <AlarmClockCheck />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>12:00-22:00</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>12:00-22:00</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>12:00-22:00</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>12:00-22:00</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>12:00-22:30</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>12:00-22:30</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>12:00-22:00</td>
        </tr>
      </tbody>
    </table>
  );
}

import type { Month } from "@/types/types";
import CalendarBody from "./CalendarBody";

export default function CalendarPreview({
  selectedMonth,
  names,
}: {
  selectedMonth: Month;
  names: string[];
}) {
  return (
    <div
      id="pdf-container"
      className="calendar-container mt-12 text-[#212121] bg-white"
    >
      <h2 className="text-3xl text-[#212121] py-2 font-normal">
        {selectedMonth.name[0].toUpperCase() + selectedMonth.name.slice(1)}
      </h2>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between">
            <th></th>
            {names.map((name, index) => (
              <th className="text-[#212121]" key={index}>
                {name ? name.trim() : "Enter name"}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <CalendarBody selectedMonth={selectedMonth} />
      </table>
    </div>
  );
}

export default function CalendarPreview({
  selectedMonth,
  names,
}: {
  selectedMonth: string;
  names: string[];
}) {
  return (
    <div className="calendar-container mt-12">
      <table className="w-full">
        <thead>
          <tr className="flex flex-row items-end justify-between">
            <th className="text-3xl flex-1 font-normal text-start max-w-fit">
              {selectedMonth[0].toUpperCase() + selectedMonth.slice(1)}
            </th>
            {names.map((name, index) => (
              <th className="font-normal text-start" key={index}>
                {name ? name.trim() : "Enter name"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

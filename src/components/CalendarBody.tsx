import type { Month } from "@/types/types";
export default function CalendarBody({
  selectedMonth,
}: {
  selectedMonth: Month;
}) {
  const currentYear: number = new Date().getFullYear();

  const getDaysInMonth = (year: number, monthNumber: number) => {
    return new Date(year, monthNumber, 0).getDate();
  };

  const renderDaysColumns = () => {
    const daysOfSelectedMonth = getDaysInMonth(currentYear, selectedMonth.no);
    const days: React.JSX.Element[] = [];

    for (let date = 1; date <= daysOfSelectedMonth; date++) {
      days.push(
        <tr key={date} className="border-b-2">
          <td className="">{date}</td>
        </tr>
      );
    }
    return days;
  };

  return <tbody className="flex flex-col gap-2">{renderDaysColumns()}</tbody>;
}

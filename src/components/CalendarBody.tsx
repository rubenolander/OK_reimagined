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

    for (let index = 1; index <= daysOfSelectedMonth; index++) {
      days.push(
        <tr key={index} className="border-b">
          <td>{index}</td>
        </tr>
      );
    }
    return days;
  };

  return <tbody>{renderDaysColumns()}</tbody>;
}

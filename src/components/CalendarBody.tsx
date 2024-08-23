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

  const getWeekNumber = (date: Date) => {
    const januaryFirst: Date = new Date(currentYear, 0, 1);
    const pastDaysOfYear: number =
      (date.getTime() - januaryFirst.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + januaryFirst.getDay() + 1) / 7);
  };

  const renderDaysColumns = () => {
    const daysOfSelectedMonth: number = getDaysInMonth(
      currentYear,
      selectedMonth.no
    );
    const days: React.JSX.Element[] = [];

    for (let date = 1; date <= daysOfSelectedMonth; date++) {
      const dayOfMonth: Date = new Date(
        currentYear,
        //Figured out that Date uses monthIndex instead of month number
        selectedMonth.no - 1,
        date
      );
      const isSunday: boolean = dayOfMonth.getDay() == 0;
      const isMonday: boolean = dayOfMonth.getDay() == 1;

      days.push(
        <tr key={date} className="border-b-2">
          <td className={isSunday ? "text-red-500" : "text-inherit"}>
            {`${
              isMonday == true
                ? date + ` (v${getWeekNumber(dayOfMonth)})`
                : date
            }`}
          </td>
        </tr>
      );
    }
    return days;
  };

  return <tbody className="flex flex-col gap-2">{renderDaysColumns()}</tbody>;
}

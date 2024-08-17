import type { Month } from "@/types/types";
export default function MonthSelector({
  months,
  selectMonth,
}: {
  months: Month[];
  selectMonth: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      className="appearance-none p-1 max-w-32 text-[#212121] cursor-pointer"
      defaultValue={"default"}
      onChange={selectMonth}
    >
      <option className="" disabled={true} value="default">
        Select month
      </option>
      {months.map((month: { name: string }) => (
        <option key={month.name} className="" value={month.name}>
          {month.name.charAt(0).toUpperCase() + month.name.slice(1)}
        </option>
      ))}
    </select>
  );
}

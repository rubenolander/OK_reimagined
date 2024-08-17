import type { Month } from "@/types/types";
export default function MonthSelector({
  months,
  selectMonth,
}: {
  months: Month[];
  selectMonth: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select defaultValue={"default"} onChange={selectMonth}>
      <option disabled={true} value="default" className="">
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

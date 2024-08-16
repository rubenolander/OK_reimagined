export default function MonthSelector({ months, selectMonth }) {
  return (
    <select onChange={selectMonth}>
      <option className="" disabled defaultValue={"hey"} value="Select">
        Select month
      </option>
      {months.map((month: { name: string }) => (
        <option value={month.name}>
          {month.name.charAt(0).toUpperCase() + month.name.slice(1, 15)}
        </option>
      ))}
    </select>
  );
}

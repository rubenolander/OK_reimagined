export default function ColumnAmountSelector({
  selectColumnAmount,
}: {
  selectColumnAmount: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      className="animate-showUp appearance-none h-fit p-1 text-[#212121] after:text-sm cursor-pointer"
      defaultValue={"default"}
      onChange={selectColumnAmount}
    >
      <option className="" disabled={true} value="default">
        Columns
      </option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );
}

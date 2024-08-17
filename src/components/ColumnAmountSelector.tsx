export default function ColumnAmountSelector({
  selectColumnAmount,
}: {
  selectColumnAmount: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      className="appearance-none h-fit p-1 text-[#212121] after:text-sm max-w-32 cursor-pointer"
      defaultValue={"default"}
      onChange={selectColumnAmount}
    >
      <option className=" after:text-sm" disabled={true} value="default">
        How many columns?
      </option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  );
}

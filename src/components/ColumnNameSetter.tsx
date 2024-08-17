export default function ColumnNameSetter({
  columnAmount,
  columnNameSet,
}: {
  columnAmount: number;
  columnNameSet: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const renderInputElements = (amount: number) => {
    const elements = [];
    for (let index = 0; index < amount; index++) {
      elements.push(
        <input
          className="text-[#212121] gap-1 p-1"
          placeholder={`Person ${index + 1}`}
          key={index}
          onChange={(e) => columnNameSet(e)}
        ></input>
      );
    }
    return elements;
  };
  return renderInputElements(columnAmount);
}

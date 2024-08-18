export default function ColumnNameSetter({
  columnAmount,
  columnStrings,
  columnNameSet,
}: {
  columnAmount: number;
  columnStrings: string[];
  columnNameSet: (index: number, value: string) => void;
}) {
  const renderInputElements = (amount: number) => {
    const elements = [];
    for (let index = 0; index < amount; index++) {
      elements.push(
        <input
          className="text-[#212121] gap-1 p-1"
          placeholder={`Person ${index + 1}`}
          key={index}
          value={columnStrings[index]}
          onChange={(e) => columnNameSet(index, e.target.value)}
        ></input>
      );
    }
    return elements;
  };
  return renderInputElements(columnAmount);
}

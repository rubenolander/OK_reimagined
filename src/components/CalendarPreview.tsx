export default function CalendarPreview({ names }: { names: string[] }) {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

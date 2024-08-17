export default function Footer() {
  return (
    <footer className="bottom-0 p-1 flex justify-between">
      <div className="ml-2">
        <span>Made by </span>

        <a
          className="text-pink-500"
          target="_blank"
          href="https://www.github.com/rubenolander"
        >
          Ruben Olander
        </a>
      </div>
      <div className="mr-2">
        <span>Please check out </span>
        <a
          className="text-[#d2691e]"
          target="_blank"
          href="https://hopla.vercel.app/"
        >
          HOP.LA
        </a>
        <span> !</span>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bottom-0 p-1 flex justify-between">
      <div>
        <span>Made by </span>
        <span>
          <a
            className="text-pink-500"
            target="_blank"
            href="https://www.github.com/rubenolander"
          >
            Ruben Olander
          </a>
        </span>
      </div>
      <a
        className="text-[#d2691e] mr-4"
        target="_blank"
        href="https://hopla.vercel.app/"
      >
        HOP.LA
      </a>
    </footer>
  );
}

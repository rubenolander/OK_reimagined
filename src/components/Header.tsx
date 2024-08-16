import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#FEFEFE]">
      <Link href="/">
        <Image
          width={100}
          height={100}
          alt="Olander Kalender logo"
          src={"/Logo.svg"}
        />
      </Link>
    </header>
  );
}

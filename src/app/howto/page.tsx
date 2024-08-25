import Link from "next/link";
export default function HowToPage() {
  return (
    <main className="flex-1 p-8 flex flex-col gap-4 w-1/3">
      <Link className="hover:underline" href="/">
        Back
      </Link>
      <h2 className="text-2xl">About this tool</h2>
      <p>
        Welcome to my family calendar creation tool. This was first thought up
        when me and my wife couldn't settle on a calendar at the shop. Either
        the images were tacky, or the number of columns were wrong. So I decided
        to create my own.
      </p>
      <p>
        You start with choosing a month. Please note the code right now
        calculates the current year, which means creating a calendar for next
        year is not yet possible.
      </p>
      <p>
        The next step is to select the number of columns you will need, from one
        to five. After that you input the names of the column owners; either
        your own name or perhaps categories. There's an 18 character limit.
      </p>
      <p>
        Lastly, click Create PDF to download a generated file for you to print!
        As of now it's designed for a standing A4 paper with margins taken into
        account as well as space on top for you to draw a nice picture.
      </p>
    </main>
  );
}

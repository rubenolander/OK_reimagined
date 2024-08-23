"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { Month } from "@/types/types";
import MonthSelector from "@/components/MonthSelector";
import ColumnAmountSelector from "@/components/ColumnAmountSelector";
import ColumnNameSetter from "@/components/ColumnNameSetter";
import CalendarPreview from "@/components/CalendarPreview";

export default function CalendarPage() {
  const monthNames: string[] = [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december",
  ];
  const [months] = useState(() => {
    let loopMonths = [];
    for (let index = 0; index < 12; index++) {
      loopMonths.push({
        name: monthNames[index],
        no: index + 1,
      });
    }
    return loopMonths;
  });

  const [selectedMonth, setSelectedMonth] = useState<Month>();
  const handleSelectMonth = (e: { target: { value: string } }) => {
    const selectedMonthValue = months?.find(
      (month) => month.name === e.target.value
    );
    setSelectedMonth(selectedMonthValue);
  };

  const [columnAmount, setColumnAmount] = useState<number>(0);
  const handleColumnAmount = (e: { target: { value: string } }) => {
    const amount = parseInt(e.target.value);
    setColumnAmount(amount);
    setColumnNames(Array(amount).fill(""));
  };

  const [columnNames, setColumnNames] = useState<string[]>(
    Array(columnAmount).fill("")
  );

  const handleInputChange = (index: number, value: string) => {
    const updatedNames = [...columnNames];
    updatedNames[index] = value;
    setColumnNames(updatedNames);
  };

  const generatePdf = () => {
    const elementToPrint: HTMLElement | null =
      document.getElementById("pdf-container");

    const pdf: jsPDF = new jsPDF("p", "mm", "a4");

    if (elementToPrint) {
      html2canvas(elementToPrint).then((canvas) => {
        const imgData: string = canvas.toDataURL("image/png");
        const imgWidth: number = pdf.internal.pageSize.getWidth();
        const imgHeight: number = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth - 20, imgHeight - 10);

        let saveString: string = "";
        columnNames.forEach((name) => {
          saveString = saveString.concat(name.slice(0, 2));
        });

        pdf.save(`${selectedMonth?.name}_${saveString}.pdf`);
      });
    } else {
      console.log("No element found");
    }
  };

  return (
    <main className="flex-1 m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-2">Calendar maker</h1>
        <Link className="hover:underline" href="/">
          Home
        </Link>
      </div>
      <div className="flex flex-row gap-4 h-28 max-h-28">
        {months && months.length === 12 ? (
          <MonthSelector months={months} selectMonth={handleSelectMonth} />
        ) : null}

        {selectedMonth ? (
          <ColumnAmountSelector selectColumnAmount={handleColumnAmount} />
        ) : null}

        {columnAmount > 0 ? (
          <div className="animate-showUp flex flex-col gap-2 flex-wrap">
            <h2 className="m-1">Name your columns:</h2>
            <ColumnNameSetter
              columnAmount={columnAmount}
              columnNames={columnNames}
              columnNameSet={handleInputChange}
            />
          </div>
        ) : null}
        {selectedMonth && columnNames.length > 0 ? (
          <button className="" onClick={generatePdf}>
            Create PDF
          </button>
        ) : null}
      </div>
      {selectedMonth && columnNames.length > 0 ? (
        <div className=" animate-showUp">
          <CalendarPreview selectedMonth={selectedMonth} names={columnNames} />
        </div>
      ) : null}
    </main>
  );
}

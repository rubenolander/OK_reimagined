"use client";
import type { Month } from "@/types/types";
import Link from "next/link";
import MonthSelector from "@/components/MonthSelector";
import ColumnAmountSelector from "@/components/ColumnAmountSelector";
import ColumnNameSetter from "@/components/ColumnNameSetter";
import CalendarPreview from "@/components/CalendarPreview";
import { useState, useEffect } from "react";

export default function CalendarPage() {
  const monthNames = [
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
  const [months, setMonths] = useState<Month[]>();

  useEffect(() => {
    const createMonths = () => {
      let loopMonths = [];
      for (let index = 0; index < 12; index++) {
        const month: Month = {
          name: monthNames[index],
          no: index + 1,
        };
        loopMonths.push(month);
      }
      setMonths(loopMonths);
    };
    createMonths();
  }, []);

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

  return (
    <main className="flex-1 m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-2">Calendar maker (2024)</h1>
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
      </div>
      {selectedMonth && columnNames.length > 0 ? (
        <CalendarPreview selectedMonth={selectedMonth} names={columnNames} />
      ) : null}
    </main>
  );
}

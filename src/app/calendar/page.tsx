"use client";
import type { Month } from "@/types/types";
import MonthSelector from "@/components/MonthSelector";
import ColumnAmountSelector from "@/components/ColumnAmountSelector";
import ColumnNameSetter from "@/components/ColumnNameSetter";
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
          no: index,
        };
        loopMonths.push(month);
      }
      setMonths(loopMonths);
    };
    createMonths();
  }, []);

  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const handleSelectMonth = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setSelectedMonth(e.target.value);
  };

  const [columnAmount, setColumnAmount] = useState<number>(0);
  const handleColumnAmount = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setColumnAmount(e.target.value);
  };

  const handleColumnChange = (e: { target: { value: any } }) => {
    console.log(e.target.value);
  };

  return (
    <main className="flex-1 m-4">
      <h1 className="text-3xl my-2">Use tool</h1>
      <div className="flex flex-row gap-4">
        {months && months.length === 12 ? (
          <MonthSelector months={months} selectMonth={handleSelectMonth} />
        ) : null}

        {selectedMonth !== "" ? (
          <ColumnAmountSelector selectColumnAmount={handleColumnAmount} />
        ) : null}

        {columnAmount > 0 ? (
          <div className="flex flex-col gap-2">
            <h2 className="m-1">Name your columns:</h2>
            <ColumnNameSetter
              columnAmount={columnAmount}
              columnNameSet={handleColumnChange}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}

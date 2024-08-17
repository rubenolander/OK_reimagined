"use client";
import type { Month } from "@/types/types";
import MonthSelector from "@/components/MonthSelector";
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

  const handleSelectMonth = (e: { target: { value: any } }) => {
    console.log(e.target.value);
  };

  return (
    <main className="flex-1 m-4">
      {months && months.length === 12 ? (
        <MonthSelector months={months} selectMonth={handleSelectMonth} />
      ) : (
        ""
      )}
    </main>
  );
}

"use client";
import type { Month } from "@/types/types";
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
  const [months, setMonths] = useState<Month[]>([]);

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

  return (
    <main className="flex-1 m-4">
      {months.length === 12 ? months.map((month) => <p>{month.name}</p>) : ""}
    </main>
  );
}

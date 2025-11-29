import React from "react";

interface WeeklyData {
  day: string;
  duration: string;
  percent: number;
}

const weekly: WeeklyData[] = [
  { day: "Tue Nov 18th 2025", duration: "2h 55m", percent: 90 },
  { day: "Mon Nov 17th 2025", duration: "1h 33m", percent: 55 },
  { day: "Sun Nov 16th 2025", duration: "0h 10m", percent: 5 },
  { day: "Sat Nov 15th 2025", duration: "2h 42m", percent: 80 },
  { day: "Fri Nov 14th 2025", duration: "4h 50m", percent: 100 },
  { day: "Thu Nov 13th 2025", duration: "4h 23m", percent: 95 },
  { day: "Wed Nov 12th 2025", duration: "3h 36m", percent: 70 },
];

interface LanguageData {
  name: string;
  percent: number;
  color: string;
}

const languages: LanguageData[] = [
  { name: "TypeScript", percent: 41.25, color: "#c850c0" },
  { name: "PHP", percent: 29.12, color: "#8a56e2" },
  { name: "Python", percent: 22.07, color: "#4c8ed9" },
  { name: "SQL", percent: 2.72, color: "#677588" },
  { name: "YAML", percent: 2.61, color: "#677588" },
];

export default function ActivityComponents() {
  return (
    <div className="space-y-12 text-white bg-black p-6 w-full mx-auto rounded-lg">
      {/* Weekly Activity */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Weekly Activity</h2>
        <div className="space-y-2">
          {weekly.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full">
              <p className="w-40 text-sm text-gray-300 whitespace-nowrap">{item.day}</p>

              <div className="flex-1 bg-[#2c2f36] h-2 rounded-full w-full">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.percent}%`, background: "linear-gradient(90deg,#00c6ff,#0072ff)" }}
                />
              </div>

              <p className="w-14 text-right text-sm text-gray-300 whitespace-nowrap">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coding Languages */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Coding Languages</h2>
        <div className="space-y-2 w-full">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full">
              <span className="w-40 text-sm text-gray-300">{lang.name}</span>

              <div className="flex-1 bg-[#2c2f36] h-2 rounded-full ">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                />
              </div>

              <span className="w-14 text-right text-sm text-gray-300">{lang.percent}%</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}
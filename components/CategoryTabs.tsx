import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  { label: "全部" },
  { label: "招聘" },
  { label: "讨论" },
  { label: "Web3" },
];

export default function CategoryTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab, idx) => (
        <Button
          key={tab.label}
          variant={active === idx ? "default" : "outline"}
          onClick={() => setActive(idx)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
} 
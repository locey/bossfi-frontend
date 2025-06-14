"use client";

import dynamic from "next/dynamic";

const StakePage = dynamic(() => import("@/router-pages/stake"), {
  ssr: false,
});

export default function App() {
  return <StakePage />;
}

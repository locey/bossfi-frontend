"use client";

import { useStakeBalance } from "@/hooks/useStakeBalance";
import { useStake } from "@/hooks/useStake";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function StakingPage() {
  const { address, isConnected } = useAccount();
  const { data: stakeAmount, isLoading } = useStakeBalance();
  const [input, setInput] = useState("");
  const stake = useStake();

  const onSubmit = async () => {
    await stake(input);
    alert("质押成功！");
  };

  if (!isConnected) return <p>请先连接钱包</p>;

  return (
    <div className="p-4">
      <h2>👤 当前地址：{address}</h2>
      <p>
        📦 当前质押：
        {isLoading
          ? "加载中..."
          : `${BigInt(stakeAmount ?? 0n) / 10n ** 18n} ETH`}
      </p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入质押金额（ETH）"
        className="border p-1 mr-2"
      />
      <button
        onClick={onSubmit}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        提交质押
      </button>
    </div>
  );
}

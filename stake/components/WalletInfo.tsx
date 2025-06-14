"use client";

import { useAccount, useBalance } from "wagmi";
import { formatUnits } from "viem";
import { useStakeBalance } from "@/hooks/useStakeBalance";
import { useState } from "react";
import { useStake } from "@/hooks/useStake";

export default function WalletInfo() {
  const { address, isConnected } = useAccount();
  const { data: stakeAmount, isLoading } = useStakeBalance();
  const [input, setInput] = useState("");
  const stake = useStake();

  const onSubmit = async () => {
    await stake(input);
    alert("质押成功！");
  };

  const { data } = useBalance({
    address,
  });

  if (!isConnected) return <p>未连接钱包</p>;

  const formatted = data ? formatUnits(data.value, data.decimals) : "0";

  return (
    <div className="p-4 border rounded-xl bg-white shadow">
      <p>✅ 钱包地址：</p>
      <p className="font-mono break-all text-sm text-blue-700">{address}</p>
      <p className="mt-2">
        💰 ETH 余额：
        <strong>
          {formatted} {data?.symbol}
        </strong>
      </p>

      <div>
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
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import {
  Wallet,
  Info,
  Plus,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

function Statistics() {
  const [ethAmount, setEthAmount] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('what-is-lido');

  const handleMaxClick = () => {
    setEthAmount('2.5'); // Example max amount
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const exchangeRate = ethAmount ? `1 ETH = 1 stETH` : '1 ETH = 1 stETH';
  const youWillReceive = ethAmount ? `${ethAmount} stETH` : '0.0 stETH';

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-gray-900">Lido statistics</h2>
        <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors">
          View on Etherscan
          <ExternalLink size={14} />
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Annual percentage rate
              </span>
              <Info size={14} className="text-gray-400" />
            </div>
            <span className="text-sm font-semibold text-gray-900">2.8%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Total staked with Lido
            </span>
            <span className="text-sm font-semibold text-gray-900">
              8,970,131.584 ETH
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Stakers</span>
            <span className="text-sm font-semibold text-gray-900">536,256</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">stETH market cap</span>
            <span className="text-sm font-semibold text-gray-900">
              $22,349,883,475
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

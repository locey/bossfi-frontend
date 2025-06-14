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

function FAQ() {
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

  const faqData = [
    {
      id: 'what-is-lido',
      question: 'What is Lido?',
      answer:
        'Lido is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.',
    },
    {
      id: 'how-does-lido-work',
      question: 'How does Lido work?',
      answer:
        'Lido allows users to stake their ETH without locking assets or maintaining infrastructure. Users can deposit ETH and receive stETH tokens in return, which represent their staked ETH plus staking rewards. The protocol distributes deposited ETH across multiple validators to ensure decentralization and security.',
    },
    {
      id: 'is-it-safe',
      question: 'Is it safe to work with Lido?',
      answer:
        'Lido has been audited by multiple security firms and has a strong track record. However, like all DeFi protocols, there are inherent risks including smart contract risk, slashing risk, and technical risks. Users should understand these risks before participating.',
    },
    {
      id: 'staking-risks',
      question: 'What are the risks of staking with Lido?',
      answer:
        'The main risks include: validator slashing (penalties for validator misbehavior), smart contract bugs, technical risks from protocol upgrades, and potential regulatory changes. Lido works to minimize these risks through diversification and security measures.',
    },
    {
      id: 'staking-apr',
      question: 'What is Lido staking APR for Ethereum?',
      answer:
        'The APR varies based on network conditions and validator performance. Currently, the annual percentage rate is approximately 2.8%, but this can fluctuate based on network participation and consensus rewards.',
    },
  ];

  {
    /* FAQ Section */
  }
  return (
    <div className="w-full max-w-2xl space-y-4">
      <h2 className="text-xl font-bold text-gray-900 px-2">FAQ</h2>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {expandedFaq === faq.id ? (
                  <ChevronUp
                    size={20}
                    className="text-gray-500 flex-shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-500 flex-shrink-0"
                  />
                )}
              </button>

              {expandedFaq === faq.id && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

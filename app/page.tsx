"use client";
// import { useCallback } from "react";

export default function Main() {
  return (
    <div className="relative min-h-screen font-sans text-[#e3e6f3] overflow-x-hidden" style={{background: "radial-gradient(ellipse at 60% 20%, #241a3a 0%, #101225 100%)"}}>
      {/* 主体内容 */}
      <main className="grid grid-cols-[180px_1fr_260px] gap-8 max-w-[1200px] mx-auto mt-10 items-start relative z-10">
        {/* 左侧分类 */}
        <aside>
          <div className="mb-6 font-semibold text-lg font-orbitron text-[#a18fff] drop-shadow-[0_0_3px_#8f5cff88]">分类</div>
          <ul className="flex flex-col gap-3">
            {["全部", "招聘", "讨论", "Web3", "区块链", "DeFi", "NFT"].map((cat) => (
              <li key={cat}>
                <button className="w-full text-left px-4 py-2 rounded-[8px] text-base text-[#e3e6f3] bg-gradient-to-r from-[#241a3a]/60 to-[#2a1a4d]/60 border border-[#2a1a4d] cursor-pointer font-medium transition-colors duration-200 hover:from-[#a18fff]/15 hover:to-[#7a8bfb]/15 shadow-[0_0_4px_#8f5cff22]">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 帖子列表 */}
        <section>
          <div className="grid grid-cols-2 gap-5">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#18132a]/90 to-[#241a3a]/80 rounded-[16px] shadow-[0_0_12px_#8f5cff22] p-6 flex flex-col gap-3 border border-[#2a1a4d]/50 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="font-orbitron font-bold text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#a18fff] via-[#7a8bfb] to-[#4cc6fb] drop-shadow-[0_0_4px_#8f5cff88]">BossFi招聘信息 1-{i}</div>
                <div className="text-[#e3e6f3] text-[15px] mb-2">
                  这是一个仅供链链链的招聘信息，我们正在寻找优秀的前端/后端开发工程师...
                </div>
                <div className="flex items-center text-xs text-[#a18fff]">
                  <span className="bg-[#a18fff]/15 text-[#a18fff] rounded-[6px] px-2.5 py-0.5 font-semibold mr-3 shadow-[0_0_4px_#8f5cff33]">招聘</span>
                  <span className="text-[#b3b3c2]">3月27日</span>
                  <span className="ml-auto flex items-center gap-5 text-[#7a8bfb]">
                    <span>👍 29</span>
                    <span>💬 17</span>
                  </span>
                </div>
                {/* 卡片发光边框动画 */}
                <div className="absolute inset-0 pointer-events-none rounded-[16px] border-2 border-transparent group-hover:border-[#a18fff] group-hover:shadow-[0_0_12px_#a18fff55] transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* 右侧侧边栏 */}
        <aside className="flex flex-col gap-5">
          <div className="bg-gradient-to-br from-[#18132a]/90 to-[#241a3a]/80 rounded-[16px] shadow-[0_0_8px_#8f5cff22] p-6 border border-[#2a1a4d]/50">
            <div className="font-orbitron font-bold mb-3 text-lg text-[#a18fff] drop-shadow-[0_0_3px_#8f5cff88]">关于 BossFi</div>
            <div className="text-[#e3e6f3] text-[15px]">
              BossFi 是区块链领域的招聘/交流平台，连接人才与机会，促进行业发展。
            </div>
          </div>
        </aside>
      </main>
      {/* Orbitron 字体 */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        .font-orbitron { font-family: 'Orbitron', 'Inter', 'Helvetica Neue', Arial, sans-serif; }
        .animated-gradient-btn {
          background: linear-gradient(270deg, #7a8bfb, #a18fff, #4cc6fb, #7a8bfb);
          background-size: 400% 400%;
          background-position: 0% 50%;
          transition: background-position 0.3s;
        }
        .animated-gradient-btn:hover, .animated-gradient-btn:focus {
          animation: gradientMove 2s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
} 
"use client";
// import { useCallback } from "react";

export default function Main() {
  return (
    <div className="relative min-h-screen font-sans text-[#e0e6ff] overflow-x-hidden" style={{background: "radial-gradient(ellipse at 60% 20%, #2d1b5a 0%, #0a0c1b 100%)"}}>
      {/* 顶部导航栏 */}
      <header className="flex items-center h-[72px] px-8 bg-gradient-to-r from-[#3a1c71] via-[#5f2c82] to-[#0f2027] border-b border-[#3a1c71] shadow-lg z-10 relative">
        <div className="font-orbitron font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#8f5cff] via-[#6a82fb] to-[#00c6fb] drop-shadow-[0_0_8px_#8f5cff] tracking-widest select-none">BossFi</div>
        <input
          className="ml-8 flex-1 px-5 py-3 rounded-[10px] border border-[#3a1c71] bg-[#1a1333]/80 text-base focus:outline-none font-sans text-[#e0e6ff] placeholder:text-[#a3a3c2] shadow-inner"
          placeholder="搜索"
        />
        <button className="ml-8 bg-gradient-to-r from-[#6a82fb] to-[#8f5cff] text-white rounded-[10px] px-6 py-3 font-bold text-base shadow-[0_0_16px_#8f5cff] hover:from-[#8f5cff] hover:to-[#6a82fb] transition border border-[#8f5cff] outline-none focus:ring-2 focus:ring-[#8f5cff]">发布帖子</button>
        <button className="ml-4 border border-[#8f5cff] text-[#8f5cff] rounded-[10px] px-6 py-3 font-bold text-base bg-white/10 hover:bg-[#8f5cff]/10 transition shadow-[0_0_8px_#8f5cff]">我的</button>
      </header>

      {/* 主体内容 */}
      <main className="grid grid-cols-[180px_1fr_260px] gap-8 max-w-[1200px] mx-auto mt-10 items-start relative z-10">
        {/* 左侧分类 */}
        <aside>
          <div className="mb-6 font-semibold text-lg font-orbitron text-[#8f5cff] drop-shadow-[0_0_6px_#8f5cff]">分类</div>
          <ul className="flex flex-col gap-3">
            {["全部", "招聘", "讨论", "Web3", "区块链", "DeFi", "NFT"].map((cat) => (
              <li key={cat}>
                <button className="w-full text-left px-4 py-2 rounded-[8px] text-base text-[#e0e6ff] bg-gradient-to-r from-[#2d1b5a]/60 to-[#3a1c71]/60 border border-[#3a1c71] cursor-pointer font-medium transition-colors duration-200 hover:from-[#8f5cff]/30 hover:to-[#6a82fb]/30 shadow-[0_0_8px_#8f5cff33]">
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
                className="bg-gradient-to-br from-[#1a1333]/90 to-[#2d1b5a]/80 rounded-[16px] shadow-[0_0_24px_#8f5cff55] p-6 flex flex-col gap-3 border border-[#3a1c71]/60 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="font-orbitron font-bold text-xl mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#8f5cff] via-[#6a82fb] to-[#00c6fb] drop-shadow-[0_0_8px_#8f5cff]">BossFi招聘信息 1-{i}</div>
                <div className="text-[#e0e6ff] text-[15px] mb-2">
                  这是一个仅供链链链的招聘信息，我们正在寻找优秀的前端/后端开发工程师...
                </div>
                <div className="flex items-center text-xs text-[#8f5cff]">
                  <span className="bg-[#8f5cff]/20 text-[#8f5cff] rounded-[6px] px-2.5 py-0.5 font-semibold mr-3 shadow-[0_0_8px_#8f5cff99]">招聘</span>
                  <span className="text-[#a3a3c2]">3月27日</span>
                  <span className="ml-auto flex items-center gap-5 text-[#6a82fb]">
                    <span>👍 29</span>
                    <span>💬 17</span>
                  </span>
                </div>
                {/* 卡片发光边框动画 */}
                <div className="absolute inset-0 pointer-events-none rounded-[16px] border-2 border-transparent group-hover:border-[#8f5cff] group-hover:shadow-[0_0_24px_#8f5cff99] transition-all duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* 右侧侧边栏 */}
        <aside className="flex flex-col gap-5">
          <div className="bg-gradient-to-br from-[#1a1333]/90 to-[#2d1b5a]/80 rounded-[16px] shadow-[0_0_16px_#8f5cff33] p-6 border border-[#3a1c71]/60">
            <div className="font-orbitron font-bold mb-3 text-lg text-[#8f5cff] drop-shadow-[0_0_6px_#8f5cff]">分类</div>
            <ul className="flex flex-col gap-2 text-[#e0e6ff] text-[15px]">
              <li>全部</li>
              <li>招聘</li>
              <li>讨论</li>
              <li>Web3</li>
              <li>区块链</li>
              <li>DeFi</li>
              <li>NFT</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#1a1333]/90 to-[#2d1b5a]/80 rounded-[16px] shadow-[0_0_16px_#8f5cff33] p-6 border border-[#3a1c71]/60">
            <div className="font-orbitron font-bold mb-3 text-lg text-[#8f5cff] drop-shadow-[0_0_6px_#8f5cff]">关于 BossFi</div>
            <div className="text-[#e0e6ff] text-[15px]">
              BossFi 是区块链领域的招聘/交流平台，连接人才与机会，促进行业发展。
            </div>
          </div>
        </aside>
      </main>
      {/* Orbitron 字体 */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        .font-orbitron { font-family: 'Orbitron', 'Inter', 'Helvetica Neue', Arial, sans-serif; }
      `}</style>
    </div>
  );
} 
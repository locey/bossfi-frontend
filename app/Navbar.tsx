"use client";

export default function Navbar() {
  return (
    <header className="flex items-center h-[72px] px-8 bg-gradient-to-r from-[#2a1a4d] via-[#3a2c5c] to-[#181c2a] border-b border-[#2a1a4d] shadow-md z-10 relative">
      <div className="font-orbitron font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#a18fff] via-[#7a8bfb] to-[#4cc6fb] drop-shadow-[0_0_4px_#8f5cff88] tracking-widest select-none">BossFi</div>
      <input
        className="ml-8 flex-1 px-5 py-3 rounded-[10px] border border-[#2a1a4d] bg-[#18132a]/80 text-base focus:outline-none font-sans text-[#e3e6f3] placeholder:text-[#b3b3c2] shadow-inner"
        placeholder="搜索"
      />
      <button className="ml-8 animated-gradient-btn text-white rounded-[10px] px-6 py-3 font-bold text-base shadow-[0_0_8px_#8f5cff33] border border-[#a18fff] outline-none focus:ring-2 focus:ring-[#a18fff] transition-all">发布帖子</button>
      <button className="ml-4 border border-[#a18fff] text-[#a18fff] rounded-[10px] px-6 py-3 font-bold text-base bg-white/5 hover:bg-[#a18fff]/10 transition shadow-[0_0_4px_#8f5cff33]">我的</button>
    </header>
  );
} 
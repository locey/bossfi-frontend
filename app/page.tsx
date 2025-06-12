export default function Home() {
  return (
    <div className="bg-[#F7F8FA] min-h-screen font-sans text-[#1A1A1A]">
      {/* 顶部导航栏 */}
      <header className="flex items-center h-[72px] px-8 bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="font-bold text-2xl text-[#6C47FF] tracking-tight" style={{fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"}}>BossFi</div>
        <input
          className="ml-8 flex-1 px-5 py-3 rounded-[12px] border border-[#E5E7EB] bg-[#F7F8FA] text-base focus:outline-none"
          placeholder="搜索"
          style={{fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"}}
        />
        <button className="ml-8 bg-[#6C47FF] text-white rounded-[12px] px-6 py-3 font-semibold text-base shadow-md hover:bg-[#7C5CFF] transition">
          发布帖子
        </button>
        <button className="ml-4 border border-[#6C47FF] text-[#6C47FF] rounded-[12px] px-6 py-3 font-semibold text-base bg-white hover:bg-[#F7F8FA] transition">
          我的
        </button>
      </header>

      {/* 主体内容 */}
      <main className="flex max-w-6xl mx-auto mt-10 gap-8">
        {/* 左侧分类 */}
        <aside className="w-40">
          <div className="mb-6 font-semibold text-lg text-[#3C3C3C]">分类</div>
          <ul className="space-y-3">
            {["全部", "招聘", "讨论", "Web3", "区块链", "DeFi", "NFT"].map((cat) => (
              <li key={cat}>
                <button className="w-full text-left px-4 py-2 rounded-[12px] text-base text-[#3C3C3C] hover:bg-[#EDEBFB] transition">{cat}</button>
              </li>
            ))}
          </ul>
        </aside>

        {/* 帖子列表 */}
        <section className="flex-1 space-y-6">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div
              key={i}
              className="bg-white rounded-[16px] p-6 shadow-[0_4px_24px_rgba(108,71,255,0.08)]"
            >
              <div className="font-bold text-xl mb-2" style={{fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"}}>BossFi招聘信息 1-{i}</div>
              <div className="text-[#3C3C3C] text-base mb-3">
                这是一个仅供链链链的招聘信息，我们正在寻找优秀的前端/后端开发工程师...
              </div>
              <div className="flex items-center text-sm text-[#6C47FF]">
                <span className="bg-[#EDEBFB] text-[#6C47FF] rounded-[8px] px-3 py-1 mr-3 font-medium">招聘</span>
                <span className="text-[#3C3C3C]">3月27日</span>
                <span className="ml-auto flex items-center space-x-6 text-[#A084FF]">
                  <span>👍 29</span>
                  <span>💬 17</span>
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* 右侧侧边栏 */}
        <aside className="w-64 space-y-6">
          <div className="bg-white rounded-[16px] p-6 shadow-[0_4px_24px_rgba(108,71,255,0.08)]">
            <div className="font-bold mb-3 text-lg text-[#3C3C3C]">分类</div>
            <ul className="space-y-2 text-[#3C3C3C] text-base">
              <li>全部</li>
              <li>招聘</li>
              <li>讨论</li>
              <li>Web3</li>
              <li>区块链</li>
              <li>DeFi</li>
              <li>NFT</li>
            </ul>
          </div>
          <div className="bg-white rounded-[16px] p-6 shadow-[0_4px_24px_rgba(108,71,255,0.08)]">
            <div className="font-bold mb-3 text-lg text-[#3C3C3C]">关于 BossFi</div>
            <div className="text-[#3C3C3C] text-base">
              BossFi 是区块链领域的招聘/交流平台，连接人才与机会，促进行业发展。
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

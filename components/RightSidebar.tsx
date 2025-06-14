import { Card } from "@/components/ui/card";

export default function RightSidebar() {
  return (
    <div className="w-72 flex flex-col gap-4">
      <Card className="p-4">
        <div className="font-semibold mb-2">分类</div>
        <div className="flex flex-col gap-2">
          <span className="cursor-pointer hover:text-blue-600">全部</span>
          <span className="cursor-pointer hover:text-blue-600">招聘</span>
          <span className="cursor-pointer hover:text-blue-600">讨论</span>
          <span className="cursor-pointer hover:text-blue-600">Web3</span>
          <span className="cursor-pointer hover:text-blue-600">区块链</span>
          <span className="cursor-pointer hover:text-blue-600">DeFi</span>
          <span className="cursor-pointer hover:text-blue-600">NFT</span>
        </div>
      </Card>
      <Card className="p-4">
        <div className="font-semibold mb-2">关于 BossFi</div>
        <div className="text-sm text-muted-foreground">
          BossFi 是区块链领域的求职/招聘平台，连接人才与机会，促进行业发展。
        </div>
        <div className="text-xs text-gray-400 mt-2">© 2025 BossFi</div>
      </Card>
    </div>
  );
} 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-blue-600">BossFi</span>
        <Input placeholder="搜索帖子、用户..." className="w-72" />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">发布</Button>
        <Button variant="ghost">我的</Button>
      </div>
    </nav>
  );
} 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-8">
        <Link className="text-2xl font-bold text-blue-600 px-0" href="/">BossFi</Link>
        <Input placeholder="搜索帖子、用户..." className="w-72" />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/posts/create"><Button variant="outline">发布</Button></Link>
        <Link href="/profile"><Button variant="ghost">我的</Button></Link>
      </div>
    </nav>
  );
} 
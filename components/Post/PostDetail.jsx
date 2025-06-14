import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PostDetail = () => (
  <Card className="w-full  mx-auto p-6 mb-6 shadow-lg">
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-2 mb-2">
        <h2 className="text-2xl font-bold">BossFi招聘信息 post-1-0</h2>
        <Badge variant="secondary">招聘</Badge>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.png" alt="avatar" />
          <AvatarFallback>BR</AvatarFallback>
        </Avatar>
        <span className="font-medium">BlockchainRecruiter</span>
        <span>· 2025年4月17日 22:10</span>
      </div>
      <div className="prose max-w-none text-base text-gray-800">
        <p>区块链开发工程师招聘<br/>
        职位描述<br/>
        我们是一家领先的区块链技术公司，正在寻找有经验的区块链开发工程师加入我们的团队。<br/>
        <b>职责：</b><br/>
        · 设计和开发区块链应用<br/>
        · 参与智能合约的编写和审计<br/>
        · 与产品设计团队合作，实现产品功能<br/>
        <b>要求：</b><br/>
        · 3年以上相关开发经验<br/>
        · 熟悉以太坊、Solidity等区块链技术<br/>
        · 良好的团队协作能力<br/>
        <b>薪资：</b><br/>
        · 25k-35k，13薪<br/>
        · 远程办公，弹性工作制<br/>
        有兴趣的开发者请联系我们！
        </p>
      </div>
      <div className="flex gap-4 pt-2 border-t mt-2 text-muted-foreground">
        <Button variant="ghost" size="sm" className="gap-1"><span>👍</span> 42</Button>
        <Button variant="ghost" size="sm" className="gap-1"><span>💬</span> 8</Button>
        <Button variant="ghost" size="sm"><span>🔗</span></Button>
      </div>
    </div>
  </Card>
);

export default PostDetail; 
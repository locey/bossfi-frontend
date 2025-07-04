"use client"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "全部", color: "default" },
  { id: "tech", name: "技术讨论", color: "blue" },
  { id: "defi", name: "DeFi", color: "green" },
  { id: "nft", name: "NFT", color: "purple" },
  { id: "trading", name: "交易策略", color: "orange" },
  { id: "news", name: "行业资讯", color: "red" },
  { id: "question", name: "问答", color: "yellow" },
]

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-muted/30 rounded-lg">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="h-8"
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}

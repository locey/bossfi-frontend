"use client"

import { Bitcoin, Palette, Home, TrendingUp, DollarSign, Building, Car, MoreHorizontal } from "lucide-react"

const categories = [
  {
    id: "crypto",
    name: "Crypto",
    threads: 124,
    icon: Bitcoin,
    color: "bg-yellow-500",
  },
  {
    id: "nfts",
    name: "NFTs",
    threads: 30,
    icon: Palette,
    color: "bg-blue-500",
  },
  {
    id: "houses",
    name: "Houses",
    threads: 67,
    icon: Home,
    color: "bg-green-500",
  },
  {
    id: "trading",
    name: "Trading",
    threads: 48,
    icon: TrendingUp,
    color: "bg-cyan-500",
  },
  {
    id: "finance",
    name: "Finance",
    threads: 24,
    icon: DollarSign,
    color: "bg-purple-500",
  },
  {
    id: "wall-street",
    name: "Wall Street",
    threads: 22,
    icon: Building,
    color: "bg-pink-500",
  },
  {
    id: "sport-cars",
    name: "Sport Cars",
    threads: 16,
    icon: Car,
    color: "bg-red-500",
  },
]

export default function CategoryGrid() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-black mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.threads} threads</p>
                </div>
              </div>
            </div>
          )
        })}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">All categories</h3>
              <p className="text-sm text-gray-500">12 more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

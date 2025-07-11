'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tag, Check } from 'lucide-react'
import { useGetCategories } from '@/api/categories/categories'
import { cagetoryIconMap } from './category-grid'

interface CategorySelectorProps {
  selectedCategory?: number
  onCategoryChange: (categoryId: number) => void
  className?: string
}

export default function CategorySelector({
  selectedCategory,
  onCategoryChange,
  className = '',
}: CategorySelectorProps) {
  const { data: categoriesData } = useGetCategories({
    page_size: 20,
    page: 1,
  })
  const categories = categoriesData?.categories || []
  const [isOpen, setIsOpen] = useState(false)

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory)

  const handleCategorySelect = (categoryId: number) => {
    onCategoryChange(categoryId)
    setIsOpen(false)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center space-x-2 text-gray-400 hover:text-gray-600 p-2 ${className}`}
        >
          {selectedCategoryData ? (
            <>
              <div
                className={`w-6 h-6 rounded-full  flex items-center justify-center`}
                style={{ backgroundColor: selectedCategoryData.color }}
              >
                {cagetoryIconMap[selectedCategoryData.name as keyof typeof cagetoryIconMap]}
              </div>
              <span className="text-sm font-medium text-gray-700">{selectedCategoryData.name}</span>
            </>
          ) : (
            <>
              <Tag className="h-4 w-4" />
              <span className="text-sm">Category</span>
            </>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-0" align="start" side="top">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm text-gray-900">Select Category</h4>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {categories.map(category => {
              const IconComponent = cagetoryIconMap[category.name as keyof typeof cagetoryIconMap]
              const isSelected = selectedCategory === category.id

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id ?? 1)}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-colors ${
                    isSelected ? 'bg-gray-100 border border-gray-200' : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                    style={{ backgroundColor: category.color }}
                  >
                    {IconComponent}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-gray-900">{category.name}</span>
                      {isSelected && <Check className="h-4 w-4 text-green-600" />}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{category.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">Choose a category to help others find your thread</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

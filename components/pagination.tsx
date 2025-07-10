'use client'
import React from 'react'
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  total: number
  pageSize: number
  page: number
}

function getPageList(current: number, total: number) {
  // 只显示最多 5 个页码，超出用 ...
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 3) return [1, 2, 3, 4, '...', total]
  if (current >= total - 2) return [1, '...', total - 3, total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

const Pagination: React.FC<PaginationProps> = ({ total, pageSize, page }) => {
  const searchParams = useSearchParams()
  const category_id = searchParams?.get('category')
  const router = useRouter()
  const totalPages = Math.ceil(total / pageSize)
  if (totalPages <= 1) return null
  const pageList = getPageList(page, totalPages)

  const onChange = (page: number) => {
    router.push(`/?category=${category_id}&page=${page}`)
  }
  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          {page > 1 && (
            <PaginationPrevious
              href="#"
              onClick={e => {
                e.preventDefault()
                if (page > 1) onChange(page - 1)
              }}
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : 0}
            />
          )}
        </PaginationItem>
        {pageList.map((p, idx) =>
          p === '...' ? (
            <PaginationItem key={'ellipsis-' + idx}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={e => {
                  e.preventDefault()
                  if (p !== page) onChange(Number(p))
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={e => {
                e.preventDefault()
                if (page < totalPages) onChange(page + 1)
              }}
              aria-disabled={page === totalPages}
              tabIndex={page === totalPages ? -1 : 0}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </UIPagination>
  )
}

export default Pagination

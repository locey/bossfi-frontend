'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      /**
       * Chrome return wrong online status in navigator.onLine result in react query stopped all request
       * Detail: https://stackoverflow.com/questions/75538301/reactquery-queryfn-passed-to-usequery-is-never-run-happens-only-on-chrome
       */
      networkMode: 'always',
      staleTime: 30 * 1e3,
      retry: false,
    },
  },
})

const ReactQueryProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider

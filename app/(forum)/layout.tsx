import Navbar from '@/components/Navbar'
import RightSidebar from '@/components/RightSidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex gap-8 mt-8">
        <div className="flex-1">{children}</div>
        <RightSidebar />
      </div>
    </>
  )
}

import { Suspense } from "react"
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import { PageLoadingFallback } from "@/components/shared/LoadingFallback"

export default function MainLayout() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<PageLoadingFallback />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Button 
          onClick={() => router.push('/')}
          className="bg-[#FF5151] hover:bg-red-600"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  )
} 
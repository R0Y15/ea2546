"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Sidebar from "@/components/sidebar";
import { useAppContext } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}

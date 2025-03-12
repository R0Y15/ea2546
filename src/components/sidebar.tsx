"use client"

import Link from "next/link"
import { LayoutDashboard, Users, Calendar, UserCircle, FolderKanban, Headphones, Settings, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const menuItems = [
  {
    title: "Main Menu",
    items: [
      {
        title: "Dashboard",
        icon: <LayoutDashboard className="h-6 w-6" />,
        href: "/",
      },
      {
        title: "Recruitment",
        icon: <Users className="h-6 w-6" />,
        href: "/recruitment",
      },
      {
        title: "Schedule",
        icon: <Calendar className="h-6 w-6" />,
        href: "/schedule",
      },
      {
        title: "Employee",
        icon: <UserCircle className="h-6 w-6" />,
        href: "/employee",
      },
      {
        title: "Department",
        icon: <FolderKanban className="h-6 w-6" />,
        href: "/department",
      }
    ]
  },
  {
    title: "Other",
    items: [
      {
        title: "Support",
        icon: <Headphones className="h-6 w-6" />,
        href: "/support",
      },
      {
        title: "Settings",
        icon: <Settings className="h-6 w-6" />,
        href: "/settings",
      }
    ]
  }
]

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export default function Sidebar({ className = "", isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsCollapsed(window.innerWidth < 1024 && !isOpen);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isOpen]);

  return (
    <div className={`${className} fixed md:relative transition-all duration-300 z-50`}>
      {/* Backdrop for mobile */}
      {isMobile && !isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      <div className={`${isCollapsed ? 'w-[80px]' : 'w-[240px]'} bg-[#FAFAFA] h-screen flex flex-col shadow-lg transition-all duration-300 relative z-50`}>
        {/* Close button for mobile */}
        {!isCollapsed && (isMobile || isOpen) && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Collapse toggle button for tablet/desktop */}
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-6 bg-white rounded-full p-1.5 border shadow-md hover:bg-gray-50"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        )}

        {/* Logo */}
        <div className="p-6 h-24 flex items-center justify-center">
          <h1 className={`text-4xl poppins-semibold transition-all duration-300 ${isCollapsed ? 'text-2xl' : 'text-4xl'}`}>
            <span className={`${isCollapsed ? 'text-xl' : 'text-4xl'}`}>
              {isCollapsed ? 'WeHR' : 'WeHR'}
            </span>
          </h1>
        </div>

        <div className="flex flex-col p-4 gap-4">
          {/* Main Menu */}
          <div className="flex flex-col">
            <div className={`px-4 py-2 mb-2 ${isCollapsed ? 'hidden' : 'block'}`}>
              <p className="text-xs text-gray-400 font-medium">MAIN MENU</p>
            </div>
            <nav className="mt-2 flex flex-col gap-5">
              {menuItems[0].items.map((item, index) => (
                <Link 
                  href={item.href} 
                  key={index} 
                  className={`flex items-center gap-3 px-4 py-2 poppins-regular group relative ${
                    pathname === item.href ? "text-red-500" : "text-[#686868] hover:text-[#161E54]"
                  }`}
                >
                  {item.icon}
                  <span className={`poppins-regular text-base whitespace-nowrap ${
                    isCollapsed ? 'hidden' : 'block'
                  }`}>
                    {item.title}
                  </span>
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.title}
                    </div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Other Menu */}
          <div className="py-4">
            <div className={`px-4 py-2 mb-2 ${isCollapsed ? 'hidden' : 'block'}`}>
              <p className="text-xs text-gray-400 font-medium">OTHER</p>
            </div>
            <nav className="mt-2 flex flex-col gap-5">
              {menuItems[1].items.map((item, index) => (
                <Link 
                  href={item.href} 
                  key={index} 
                  className={`flex items-center gap-3 px-4 py-2 poppins-regular group relative ${
                    pathname === item.href ? "text-red-500" : "text-[#686868] hover:text-[#161E54]"
                  }`}
                >
                  {item.icon}
                  <span className={`poppins-regular text-base whitespace-nowrap ${
                    isCollapsed ? 'hidden' : 'block'
                  }`}>
                    {item.title}
                  </span>
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.title}
                    </div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}


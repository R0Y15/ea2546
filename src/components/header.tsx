import { ChevronDown } from 'lucide-react'
import { Bell, MessageSquare } from 'lucide-react'
import { Menu, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'

const Header = ({ setIsSidebarOpen }: { setIsSidebarOpen: (isOpen: boolean) => void }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="bg-white p-4 md:px-12 flex items-center justify-between h-24 relative">
                <div className="flex items-center gap-4 md:gap-0 w-full md:w-auto">
                    {/* Mobile menu toggle and search */}
                    <div className="flex items-center gap-4">
                        <button
                            className="block md:hidden"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Mobile Search Toggle */}
                        <button
                            className="block md:hidden"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            {isSearchOpen ? (
                                <X className="h-6 w-6 text-gray-500" />
                            ) : (
                                <Search className="h-6 w-6 text-gray-500" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className={`
                        absolute left-0 right-0 top-24 bg-white p-4 border-b
                        transform transition-all duration-300 md:hidden
                        ${isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                    `}>
                        <div className="relative">
                            <Input 
                                type="text" 
                                placeholder="Search" 
                                className="pl-4 pr-10 py-2 w-full rounded-sm border h-11" 
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        </div>
                    </div>

                    {/* Desktop Search Bar */}
                    <div className="hidden items-center md:flex lg:max-w-xl w-xs h-11 relative">
                        <Input 
                            type="text" 
                            placeholder="Search" 
                            className="pl-4 pr-10 py-2 w-full rounded-sm border h-11" 
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-8">
                    <button className="relative">
                        <Bell className="h-6 w-6 text-gray-500" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <button>
                        <MessageSquare className="h-6 w-6 text-gray-500" />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="h-10.5 w-10.5 rounded-full overflow-hidden">
                            <img
                                src="/roy.png"
                                alt="User avatar"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="hidden md:inline-block poppins-medium text-base">Admira John</span>
                        <ChevronDown className="h-6 w-6 text-gray-500" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
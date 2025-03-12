"use client"

import { ChevronDown } from 'lucide-react'
import { Bell, MessageSquare } from 'lucide-react'
import { Menu, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { useAppContext } from '@/context/AppContext'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from 'next/navigation'

// Dummy notifications data
const notificationsList = [
    {
        id: 1,
        title: "New Employee Onboarding",
        description: "John Doe has joined the team",
        time: "5 minutes ago",
        isRead: false
    },
    {
        id: 2,
        title: "Meeting Reminder",
        description: "Team meeting in 30 minutes",
        time: "30 minutes ago",
        isRead: false
    },
    {
        id: 3,
        title: "Task Update",
        description: "Project deadline updated",
        time: "1 hour ago",
        isRead: true
    }
]

const Header = () => {
    const router = useRouter()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const { 
        isSidebarOpen, 
        setIsSidebarOpen,
        notifications,
        setNotifications,
        messages,
        setMessages 
    } = useAppContext()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add search functionality here
        setIsSearchOpen(false)
    }

    const clearNotification = () => {
        setNotifications(0)
    }

    const handleMessageClick = () => {
        router.push('/messages')
        setMessages(0)
    }

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
                        <form onSubmit={handleSearch} className="relative">
                            <Input 
                                type="text" 
                                placeholder="Search" 
                                className="pl-4 pr-10 py-2 w-full rounded-sm border h-11" 
                            />
                            <button type="submit">
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Desktop Search Bar */}
                    <form onSubmit={handleSearch} className="hidden items-center md:flex lg:max-w-xl w-xs h-11 relative">
                        <Input 
                            type="text" 
                            placeholder="Search" 
                            className="pl-4 pr-10 py-2 w-full rounded-sm border h-11" 
                        />
                        <button type="submit">
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        </button>
                    </form>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-8">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="relative">
                                <Bell className="h-6 w-6 text-gray-500" />
                                {notifications > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {notifications}
                                    </span>
                                )}
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-0" align="end">
                            <div className="p-4 border-b">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">Notifications</h3>
                                    <button 
                                        onClick={clearNotification}
                                        className="text-xs text-red-500 hover:text-red-600"
                                    >
                                        Mark all as read
                                    </button>
                                </div>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto">
                                {notificationsList.map((notification) => (
                                    <div 
                                        key={notification.id} 
                                        className={`p-4 border-b last:border-b-0 hover:bg-gray-50 ${
                                            !notification.isRead ? 'bg-blue-50/50' : ''
                                        }`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-sm font-medium">{notification.title}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                                                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                                            </div>
                                            {!notification.isRead && (
                                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t text-center">
                                <button className="text-sm text-red-500 hover:text-red-600">
                                    View All Notifications
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <button onClick={handleMessageClick}>
                        <MessageSquare className="h-6 w-6 text-gray-500" />
                        {messages > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                {messages}
                            </span>
                        )}
                    </button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                            <div className="h-10.5 w-10.5 rounded-full overflow-hidden">
                                <img
                                    src="/roy.png"
                                    alt="User avatar"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="hidden md:inline-block poppins-medium text-base">Admira John</span>
                            <ChevronDown className="h-6 w-6 text-gray-500" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push('/profile')}>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push('/settings')}>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    )
}

export default Header
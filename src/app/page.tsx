"use client"

import StatCard from "@/components/stat-card"
import EmployeeStats from "@/components/employee-stats"
import TalentStats from "@/components/talent-stats"
import RecentActivity from "@/components/recent-activity"
import Announcements from "@/components/announcements"
import UpcomingSchedule from "@/components/upcoming-schedule"
import Header from "@/components/header"

export default function Dashboard() {
  return (
    <>
      <Header />
      {/* Dashboard Content */}
      <main className="flex-1 p-4 md:px-12 overflow-y-auto">
        <h1 className="text-2xl poppins-medium mb-3">Dashboard</h1>

        <div className="flex flex-col lg:flex-row w-full gap-4">
          {/* Left Section - 60% width */}
          <div className="flex flex-col w-full lg:w-[60%] gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <StatCard
                title="Available Position"
                value="24"
                subtitle="4 Urgently needed"
                subtitleColor="text-red-500"
                bgColor="bg-[#FFEFE7]"
              />
              <StatCard
                title="Job Open"
                value="10"
                subtitle="4 Active hiring"
                subtitleColor="text-blue-500"
                bgColor="bg-[#E8F0FB]"
              />
              <StatCard
                title="New Employees"
                value="24"
                subtitle="4 Department"
                subtitleColor="text-pink-500"
                bgColor="bg-[#FDEBF9]"
              />
            </div>

            {/* Employee and Talent Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <EmployeeStats />
              <TalentStats />
            </div>
            
            {/* Announcements */}
            <div className="flex-shrink-0">
              <Announcements />
            </div>
          </div>

          {/* Right Section - 40% width */}
          <div className="flex flex-col md:flex-row lg:flex-col w-full lg:w-[40%] gap-4">
            <div className="w-full md:w-[50%] lg:w-full">
              <RecentActivity />
            </div>
            <div className="w-full md:w-[60%] lg:w-full">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


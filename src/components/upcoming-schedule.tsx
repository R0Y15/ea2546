"use client"

import { CalendarIcon, ChevronDown, MoreHorizontal } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const upcomingSchedules = [
  {
    title: "Review candidate applications",
    date: "Today - 11:30 AM",
    priority: "Priority",
  },
  {
    title: "Interview with candidates",
    date: "Today - 10:30 AM",
    priority: "Other"
  },
  {
    title: "Short meeting with product designer from IT Departement",
    date: "Today - 09:15 AM",
    priority: "Other"
  },
  {
    title: "Meeting HR Department",
    date: "Yesterday, 12:30 PM",
    priority: "Other"
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    date: "Yesterday, 09:15 AM",
    priority: "Other"
  }
]

export default function UpcomingSchedule() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="bg-white rounded-lg border w-full flex flex-col lg:max-h-[37rem] md:max-h-[22.5rem]">
      <div className="p-4 flex justify-between items-center border-b">
        <h3 className="text-[#161E54] poppins-medium text-base lg:text-lg">Upcoming Schedule</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[180px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: enUS }) : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={enUS}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Priority Items */}
        <div className="mb-3">
          <p className="text-xs poppins-regular text-gray-500">Priority</p>
        </div>
        <div className="space-y-3">
          {upcomingSchedules
            .filter(schedule => schedule.priority === "Priority")
            .map((schedule, index) => (
              <div key={index} className="rounded-lg p-3 bg-[#FAFAFA] border">
                <div className="flex justify-between">
                  <h4 className="poppins-regular text-base">{schedule.title}</h4>
                  <button>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                <p className="text-xs poppins-regular text-gray-500">{schedule.date}</p>
              </div>
            ))}
        </div>

        {/* Other Items */}
        <div className="mt-6 mb-3">
          <p className="text-sm text-gray-500">Other</p>
        </div>
        <div className="space-y-3">
          {upcomingSchedules
            .filter(schedule => schedule.priority === "Other")
            .map((schedule, index) => (
              <div key={index} className="rounded-lg p-3 bg-[#FAFAFA] border">
                <div className="flex justify-between">
                  <h4 className="poppins-regular text-base">{schedule.title}</h4>
                  <button>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                <p className="text-xs poppins-regular text-gray-500">{schedule.date}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="p-3 border-t text-center">
        <button className="text-red-500 text-sm poppins-medium">Create a New Schedule</button>
      </div>
    </div>
  )
}


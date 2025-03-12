import { ChevronDown, MoreHorizontal } from "lucide-react"

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
  return (
    <div className="bg-white rounded-lg border w-full flex flex-col lg:max-h-[37rem] md:max-h-[22.5rem]">
      <div className="p-4 flex justify-between items-center border-b">
        <h3 className="text-[#161E54] poppins-medium text-base lg:text-lg">Upcoming Schedule</h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm md:text-sm text-gray-500 border rounded-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
          <span>Today, 13 Sep 2021</span>
          <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
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


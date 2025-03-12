import { ChevronDown, MoreHorizontal, Pin, Star } from "lucide-react"

const announcements = [
  {
    title: "Outing schedule for every departement",
    date: "5 Minutes ago",
  },
  {
    title: "Meeting HR Department",
    date: "Yesterday, 12:30 PM",
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    date: "Yesterday, 09:15 AM",
  },
  {
    title: "Meeting with the CEO",
    date: "Yesterday, 8:30 AM",
  },
  {
    title: "Group meeting with the HR Department",
    date: "Yesterday, 8:30 AM",
  }
]

export default function Announcements() {
  return (
    <div className="bg-white rounded-lg border w-full flex flex-col max-h-[500px]">
      <div className="p-4 flex justify-between items-center border-b">
        <h3 className="text-[#161E54] poppins-medium text-base lg:text-lg">Announcement</h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm md:text-sm text-gray-500 border rounded-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
          <span>Today, 13 Sep 2021</span>
          <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-sm p-4 shadow-none border">
              <div className="flex justify-between items-center">
                <h4 className="text-[#161E54] mb-1 poppins-regular text-base">{announcement.title}</h4>
                <div className="flex gap-4 items-center">
                  <button>
                    <Star className={`h-5 w-5 text-gray-400 ${announcement.title === 'Outing schedule for every departement' ? 'fill-gray-400' : ''}`} />
                  </button>
                  <button>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <p className="text-gray-500 poppins-regular text-xs">{announcement.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 border-t text-center mt-auto">
        <button className="text-[#FF5151] poppins-medium text-sm">See All Announcement</button>
      </div>
    </div>
  )
}

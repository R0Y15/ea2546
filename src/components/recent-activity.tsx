import { Button } from "@/components/ui/button"

export default function RecentActivity() {
  return (
    <div className="flex flex-col bg-[#1a1f36] text-white rounded-lg md:max-h-72 lg:max-h-auto">
      <div className="p-4 px-6 bg-[#1B214B] rounded-t-lg">
        <span className="poppins-regular text-lg tracking-wider">Recent Activity</span>
      </div>
      <div className="p-4 px-6 py-8 bg-[#131943] rounded-lg">
        <h3 className="poppins-medium mb-1 text-xs text-gray-300">10:40 AM, Fri 10 Sept 2021</h3>
        <h2 className="poppins-medium text-lg mb-2 tracking-wider">You Posted a New Job</h2>
        <p className="poppins-regular text-sm text-gray-300 mb-4">
          Kindly check the requirements and terms of work and make sure everything is right.
        </p>

        <div className="flex justify-between items-center flex-row md:flex-col md:items-start md:gap-4 lg:flex-row lg:items-center">
          <p className="poppins-regular text-sm">Today you makes 12 Activity</p>
          <Button variant="destructive" size="sm" className="bg-[#FF5151] hover:bg-red-600 h-9.5 w-32.5 px-4 rounded-sm">
            <span className="poppins-medium text-sm">
              See All Activity
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image";

export default function TalentStats() {
  return (
    <div className="max-w-96 h-48 flex bg-white rounded-lg p-4 border">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col justify-between items-start">
          <h3 className="text-[#161E54] poppins-medium text-lg">Talent Request</h3>
          <p className="poppins-medium text-5xl mb-4 text-[#161E54]">16</p>

          <div className="flex flex-col">
            <p className="poppins-regular text-xs text-[#686868]">6 Men</p>
            <p className="poppins-regular text-xs text-[#686868]">10 Women</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="mb-4">
            <div className="w-full relative flex justify-center mb-4">
              <Image
                src="/graph.svg"
                alt="Employee Stats"
                width={115}
                height={78}
              />
            </div>
            <div className="text-xs poppins-regular bg-[#FFEFE7] px-2 py-1 rounded text-center text-[#161E54]">+5% Past month</div>
          </div>
        </div>
      </div>
    </div >
  )
}


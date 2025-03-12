interface StatCardProps {
  title: string
  value: string
  subtitle: string
  subtitleColor: string
  bgColor: string
}

export default function StatCard({ title, value, subtitle, subtitleColor, bgColor }: StatCardProps) {
  return (
    <div className={`rounded-lg p-4 ${bgColor} flex flex-col justify-between items-start h-36`}>
      <h3 className="text-[#161E54] poppins-medium text-base lg:text-lg mb-2">{title}</h3>
      <p className="poppins-medium text-4xl mb-2 text-[#161E54]">{value}</p>
      <p className={`poppins-regular text-base ${subtitleColor}`}>{subtitle}</p>
    </div>
  )
}


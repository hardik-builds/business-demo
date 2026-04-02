import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaCut, FaUtensils, FaStethoscope, FaGraduationCap, FaSchool, FaDumbbell } from 'react-icons/fa'

const businesses = [
  {
    name: 'Salon',
    description: 'Beauty and grooming services',
    icon: <FaCut className="text-4xl mb-2 text-pink-500" />,
    href: '/salon',
    bgColor: 'bg-pink-50',
    hoverColor: 'hover:bg-pink-100'
  },
  {
    name: 'Restaurant',
    description: 'Food delivery and dining',
    icon: <FaUtensils className="text-4xl mb-2 text-orange-500" />,
    href: '/restaurant',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:bg-orange-100'
  },
  {
    name: 'Clinic',
    description: 'Healthcare services',
    icon: <FaStethoscope className="text-4xl mb-2 text-blue-500" />,
    href: '/clinic',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-100'
  },
  {
    name: 'Coaching Classes',
    description: 'Educational coaching',
    icon: <FaGraduationCap className="text-4xl mb-2 text-purple-500" />,
    href: '/coaching',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:bg-purple-100'
  },
  {
    name: 'School',
    description: 'Education for all ages',
    icon: <FaSchool className="text-4xl mb-2 text-green-500" />,
    href: '/school',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:bg-green-100'
  },
  {
    name: 'Gym',
    description: 'Fitness and wellness',
    icon: <FaDumbbell className="text-4xl mb-2 text-indigo-500" />,
    href: '/gym',
    bgColor: 'bg-indigo-50',
    hoverColor: 'hover:bg-indigo-100'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Smart Business Conversion System</h1>
          <p className="text-xl text-gray-600">Turn visitors into customers instantly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <Link key={business.name} href={business.href}>
              <div className={`${business.bgColor} ${business.hoverColor} rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center text-center`}>
                {business.icon}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{business.name}</h2>
                <p className="text-gray-600">{business.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500">
          <p>Click on any business to see how it converts visitors to customers</p>
        </div>
      </div>
    </div>
  )
}
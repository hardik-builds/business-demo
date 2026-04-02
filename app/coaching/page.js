
'use client'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'
import BillingComponent from '@/components/BillingComponent'

const courses = [
  { name: '10th Class', price: 3000 },
  { name: '12th Science', price: 4000 },
  { name: '12th Commerce', price: 3500 },
  { name: 'JEE Preparation', price: 8000 },
  { name: 'NEET Preparation', price: 9000 },
  { name: 'Spoken English', price: 2000 }
]

const phoneNumber = '919876543210' // Replace with actual WhatsApp number

export default function CoachingPage() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  
  const handleAddToBill = (name, price, quantity) => {
    setSelectedCourses([...selectedCourses, { name, price, quantity }]);
  };
  
  const getWhatsAppMessage = () => {
    if (selectedCourses.length === 0) return "Hi, I want information about your courses.";
    
    let message = "Hi, I want details for:\n";
    selectedCourses.forEach((course, index) => {
      message += `${index + 1}. ${course.name}\n`;
    });
    
    return message;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Excellence Coaching Classes</h1>
          <p className="text-gray-600 mb-4">Building futures with quality education</p>
          
          <div className="flex gap-4">
            <WhatsAppButton 
              phoneNumber={phoneNumber}
              message={getWhatsAppMessage()}
            />
            
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
            >
              <FaPhoneAlt className="text-xl" />
              Call Now
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <ServiceCard 
                  key={course.name}
                  name={course.name}
                  price={course.price}
                  onAddToBill={handleAddToBill}
                />
              ))}
            </div>
          </div>
          
          <div>
            <BillingComponent 
              businessName="Excellence Coaching Classes"
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
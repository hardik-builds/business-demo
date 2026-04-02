'use client'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'
import BillingComponent from '@/components/BillingComponent'

const programs = [
  { name: 'Nursery Admission', price: 15000 },
  { name: 'Primary School', price: 25000 },
  { name: 'Middle School', price: 30000 },
  { name: 'High School', price: 35000 },
  { name: 'Transportation', price: 8000 },
  { name: 'Hostel Facility', price: 40000 }
]

const phoneNumber = '919876543210' // Replace with actual WhatsApp number

export default function SchoolPage() {
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  
  const handleAddToBill = (name, price, quantity) => {
    setSelectedPrograms([...selectedPrograms, { name, price, quantity }]);
  };
  
  const getWhatsAppMessage = () => {
    if (selectedPrograms.length === 0) return "Hi, I want admission details for my child.";
    
    let message = "Hi, I want admission details for:\n";
    selectedPrograms.forEach((program, index) => {
      message += `${index + 1}. ${program.name}\n`;
    });
    
    return message;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bright Future School</h1>
          <p className="text-gray-600 mb-4">Nurturing young minds for a better tomorrow</p>
          
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((program) => (
                <ServiceCard 
                  key={program.name}
                  name={program.name}
                  price={program.price}
                  onAddToBill={handleAddToBill}
                />
              ))}
            </div>
          </div>
          
          <div>
            <BillingComponent 
              businessName="Bright Future School"
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'
import BillingComponent from '@/components/BillingComponent'

const services = [
  { name: 'General Checkup', price: 500 },
  { name: 'Dental', price: 800 },
  { name: 'Eye Checkup', price: 600 },
  { name: 'Blood Test', price: 400 },
  { name: 'X-Ray', price: 700 },
  { name: 'Vaccination', price: 300 }
]

const phoneNumber = '919876543210' // Replace with actual WhatsApp number

export default function ClinicPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  
  const handleAddToBill = (name, price, quantity) => {
    setSelectedServices([...selectedServices, { name, price, quantity }]);
  };
  
  const getWhatsAppMessage = () => {
    if (selectedServices.length === 0) return "Hi, I want to book an appointment.";
    
    let message = "Hi, I want appointment for:\n";
    selectedServices.forEach((service, index) => {
      message += `${index + 1}. ${service.name}\n`;
    });
    
    return message;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">CareWell Clinic</h1>
          <p className="text-gray-600 mb-4">Your health is our priority</p>
          
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <ServiceCard 
                  key={service.name}
                  name={service.name}
                  price={service.price}
                  onAddToBill={handleAddToBill}
                />
              ))}
            </div>
          </div>
          
          <div>
            <BillingComponent 
              businessName="CareWell Clinic"
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}   
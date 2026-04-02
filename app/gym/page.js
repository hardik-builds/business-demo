'use client'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'
import BillingComponent from '@/components/BillingComponent'

const memberships = [
  { name: '1 Month Membership', price: 1500 },
  { name: '3 Months Membership', price: 4000 },
  { name: '6 Months Membership', price: 7000 },
  { name: '1 Year Membership', price: 12000 },
  { name: 'Personal Training', price: 3000 },
  { name: 'Yoga Classes', price: 2000 }
]

const phoneNumber = '919876543210' // Replace with actual WhatsApp number

export default function GymPage() {
  const [selectedMemberships, setSelectedMemberships] = useState([]);
  
  const handleAddToBill = (name, price, quantity) => {
    setSelectedMemberships([...selectedMemberships, { name, price, quantity }]);
  };
  
  const getWhatsAppMessage = () => {
    if (selectedMemberships.length === 0) return "Hi, I want to join the gym.";
    
    let message = "Hi, I want to join gym membership:\n";
    selectedMemberships.forEach((membership, index) => {
      message += `${index + 1}. ${membership.name}\n`;
    });
    
    return message;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">PowerFit Gym</h1>
          <p className="text-gray-600 mb-4">Transform your body, transform your life</p>
          
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {memberships.map((membership) => (
                <ServiceCard 
                  key={membership.name}
                  name={membership.name}
                  price={membership.price}
                  onAddToBill={handleAddToBill}
                />
              ))}
            </div>
          </div>
          
          <div>
            <BillingComponent 
              businessName="PowerFit Gym"
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
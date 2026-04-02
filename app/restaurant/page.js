'use client'
import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceCard from '@/components/ServiceCard'
import BillingComponent from '@/components/BillingComponent'

const menuItems = [
  { name: 'Paneer Butter Masala', price: 250 },
  { name: 'Naan', price: 20 },
  { name: 'Cold Drink', price: 40 },
  { name: 'Biryani', price: 280 },
  { name: 'Soup', price: 120 },
  { name: 'Salad', price: 80 }
]

const phoneNumber = '919876543210' // Replace with actual WhatsApp number

export default function RestaurantPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const handleAddToBill = (name, price, quantity) => {
    setSelectedItems([...selectedItems, { name, price, quantity }]);
  };
  
  const getWhatsAppMessage = () => {
    if (selectedItems.length === 0) return "Hi, I want to place an order.";
    
    let message = "Hi, I want to order:\n";
    selectedItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
    });
    
    return message;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Delicious Bites Restaurant</h1>
          <p className="text-gray-600 mb-4">Serving authentic flavors with love</p>
          
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <ServiceCard 
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  onAddToBill={handleAddToBill}
                />
              ))}
            </div>
          </div>
          
          <div>
            <BillingComponent 
              businessName="Delicious Bites Restaurant"
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
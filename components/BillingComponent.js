import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton';

export default function BillingComponent({ businessName, phoneNumber }) {
  const [billItems, setBillItems] = useState([]);
  const [isBillGenerated, setIsBillGenerated] = useState(false);
  
  const addItemToBill = (name, price, quantity) => {
    const existingItemIndex = billItems.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
      const updatedItems = [...billItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setBillItems(updatedItems);
    } else {
      setBillItems([...billItems, { name, price, quantity }]);
    }
  };
  
  const removeItemFromBill = (index) => {
    const updatedItems = [...billItems];
    updatedItems.splice(index, 1);
    setBillItems(updatedItems);
  };
  
  const calculateTotal = () => {
    return billItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const generateBill = () => {
    setIsBillGenerated(true);
  };
  
  const resetBill = () => {
    setBillItems([]);
    setIsBillGenerated(false);
  };
  
  const getBillMessage = () => {
    if (billItems.length === 0) return "";
    
    let message = `Hi, your bill from ${businessName}:\n\n`;
    billItems.forEach(item => {
      message += `${item.name} x${item.quantity}: ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${calculateTotal()}\n\nPlease confirm payment.`;
    
    return message;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Billing System</h2>
      
      {billItems.length === 0 ? (
        <p className="text-gray-500 mb-4">No items added to bill yet. Add services from above.</p>
      ) : (
        <div className="mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Item</th>
                <th className="text-center py-2">Qty</th>
                <th className="text-right py-2">Price</th>
                <th className="text-right py-2">Total</th>
                <th className="text-center py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {billItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.name}</td>
                  <td className="text-center py-2">{item.quantity}</td>
                  <td className="text-right py-2">₹{item.price}</td>
                  <td className="text-right py-2">₹{item.price * item.quantity}</td>
                  <td className="text-center py-2">
                    <button 
                      onClick={() => removeItemFromBill(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-right font-bold py-2">Total:</td>
                <td className="text-right font-bold py-2">₹{calculateTotal()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
      {billItems.length > 0 && !isBillGenerated && (
        <button 
          onClick={generateBill}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
        >
          Generate Bill
        </button>
      )}
      
      {isBillGenerated && (
        <div className="mb-4">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Bill generated successfully!
          </div>
          
          <div className="flex gap-2">
            <WhatsAppButton 
              phoneNumber={phoneNumber}
              message={getBillMessage()}
              buttonText="Send Bill on WhatsApp"
              className="flex-1"
            />
            
            <button 
              onClick={resetBill}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              New Bill
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
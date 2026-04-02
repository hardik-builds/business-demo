import { useState } from 'react'

export default function ServiceCard({ name, price, onAddToBill }) {
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToBill = () => {
    onAddToBill(name, price, quantity);
    setQuantity(1);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">₹{price}</p>
      
      <div className="flex items-center mb-4">
        <label className="mr-2 text-gray-700">Quantity:</label>
        <div className="flex items-center">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded-l"
          >
            -
          </button>
          <span className="bg-gray-100 text-gray-700 font-bold py-1 px-3">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded-r"
          >
            +
          </button>
        </div>
      </div>
      
      <button 
        onClick={handleAddToBill}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Add to Bill
      </button>
    </div>
  )
}
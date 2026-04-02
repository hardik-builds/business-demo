import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton({ phoneNumber, message, buttonText = "Book on WhatsApp", className = "" }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      <FaWhatsapp className="text-xl" />
      {buttonText}
    </a>
  )
}
import Link from 'next/link'
import Image from 'next/image'
export default function Herosection(){
  return (
    <div className='h-auto md:h-[40] mt-8 w-full flex-col justify-center item-center  py-10'>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className='text-center mr-8 ml-8'>
            <h1 className='text-blue-900 font-bold text-4xl '>FAQ Section</h1><br/>
           <p className='text-base font-normal font-sans mr-10 ml-10 leading-relaxed text-left mt-2'> Explore our FAQ section to find answers to commonly asked questions about our products and services. From account setup and troubleshooting to payment options, we've got you covered. Streamline your experience by browsing through our comprehensive FAQ guide.<br/>
             If you can't find what you're looking for, feel free to contact our support team for personalized assistance.</p>

             <button className="bg-white mt-5 outline outline-2 outline-blue-900 text-blue-900 px-4 py-1 rounded-full hover:bg-blue-900 hover:text-white">
            Connect with us
          </button>
          </div>
          </div>
    </div>
  )
}
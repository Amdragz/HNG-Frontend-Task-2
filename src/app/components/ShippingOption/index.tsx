import Image from "next/image";
import logo2 from "../../../../public/assets/images/logo2.png"
import logo3 from "../../../../public/assets/images/logo3.png"

const ShippingOptions = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-2xl text-gray-900 leading-[38.4px]">Delivery Shipping</h2>
      <div className="flex items-center gap-6 px-4 py-2 border-[1.5px] border-solid border-gray-300 rounded-3xl">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#202024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.75 12L10.58 14.83L16.25 9.16998" stroke="#202024" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-gray-900 space-y-1 font-normal">
          <p className="flex gap-1 items-center"><p>N3,700</p> . <p>Fast Delivery</p> <span className="bg-[#4CBC79] rounded-3xl px-2 py-1">Recommended</span></p>
          <p className="text-gray-300 font-normal text-base">Get It by tomorrow, 10 Jul 24</p>
        </div>
        <Image 
          src={logo2}
          alt=""
           width={79}
          height={35}
        />
      </div>
              {/* free shoping card */}
      <div className="flex items-center gap-6 px-4 py-2 text-gray-900 border-[1.5px] border-solid border-gray-100 rounded-3xl">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#202024" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.75 12L10.58 14.83L16.25 9.16998" stroke="#202024" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div>
          <p className="text-base">Free Delivery</p>
          <p className="text-gray-300">Get It by Friday, 12 Jul 24</p>
        </div>

        <div className="flex-grow"></div>

        <Image 
          src={logo3}
          alt=""
          width={79}
          height={35}
        />
      </div>
    </div>    
   );
}
 
export default ShippingOptions;
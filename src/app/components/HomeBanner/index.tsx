import Image from "next/image";
import shoppingBagImage from "../../../../public/assets/images/shopping_bag.png"

const HomeBanner = () => {
  return (
      <div className="px-4 max-w-[1249px] mx-auto overflow-x-hidden container">
        <div className="mt-8 mb-8 md:mx-0 bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2] rounded-2xl md:rounded-3xl flex items-center justify-between px-3 py-1 md:pl-10 md:pr-14 container">
          <div className="font-medium">
            <p className="text-[#5F606D] text-[12px] md:text-base">Collection</p>
            <p className="text-sm md:text-xl text-[#202024]">Explore Our Diverse Range of Tote Bags</p>
            <p className="text-[#5F606D] text-[12px] md:text-base">{"Don't miss out on our tote bag collection! You won't be disappointed. 🎒✨"}</p>
          </div>
          <Image
            src={shoppingBagImage}
            alt=""
            width={84}
            height={135}
            style={{ objectFit: 'cover' }}
            className="w-[84px] h-[135px] -rotate-[38deg] object-cover -translate-y-4"
          />
        </div>
      </div>
  );
};

export default HomeBanner;

import Image from "next/image";
import logo4 from "../../../../public/assets/images/logo4.png";

type Prop = {
  totalPrice: number;
};

const formatPriceToNaira = (price: number): string => {
  return price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

const CheckoutPayment = ({ totalPrice }: Prop) => {
  return (
    <div className="flex flex-col gap-1 max-w-[488px] text-gray-900">
      <div className="flex flex-col gap-1 font-medium">
        <h2 className="text-2xl leading-[38.4px]">Payment Details</h2>
        <p className="text-base text-gray-300 leading-[38.4px]">
          Complete your purchase by providing your Payment Details
        </p>
      </div>

      <form className="flex flex-col gap-6 px-6 py-4 text-gray-900 border border-solid border-gray-300 rounded-[32px]">
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="font-medium text-base">
            Email address
          </label>
          <input
            type="text"
            placeholder="thevueisbetter@gmail.com"
            required
            className="py-4 px-2 text-left font-medium text-base border border-solid border-gray-300 rounded-lg placeholder:text-gray-900 outline-blue-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-base">Payment method</p>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col flex-grow gap-4 py-4 px-2 border border-solid border-gray-300 rounded-lg">
              <svg
                width="45"
                height="28"
                viewBox="0 0 45 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 24.3139C20.1169 26.3704 17.0255 27.6119 13.6476 27.6119C6.1102 27.6119 0 21.4308 0 13.806C0 6.1811 6.1102 0 13.6476 0C17.0255 0 20.1169 1.2415 22.5 3.2981C24.8832 1.2415 27.9745 0 31.3525 0C38.8898 0 45 6.1811 45 13.806C45 21.4308 38.8898 27.6119 31.3525 27.6119C27.9745 27.6119 24.8832 26.3704 22.5 24.3139Z"
                  fill="#ED0006"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5 24.3139C25.4344 21.7816 27.2951 18.0136 27.2951 13.806C27.2951 9.5983 25.4344 5.8303 22.5 3.2981C24.8832 1.2415 27.9745 0 31.3525 0C38.8898 0 45 6.1811 45 13.806C45 21.4308 38.8898 27.6119 31.3525 27.6119C27.9745 27.6119 24.8832 26.3704 22.5 24.3139Z"
                  fill="#F9A000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5001 3.2981C25.4345 5.8304 27.2952 9.5983 27.2952 13.806C27.2952 18.0136 25.4345 21.7815 22.5001 24.3138C19.5658 21.7815 17.7051 18.0136 17.7051 13.806C17.7051 9.5983 19.5658 5.8304 22.5001 3.2981Z"
                  fill="#FF5E00"
                />
              </svg>
              <p className="font-medium text-base">Credit card</p>
            </div>
            <div className="flex flex-col flex-grow gap-4 py-4 px-2 border border-solid border-gray-300 rounded-lg">
              <Image src={logo4} alt="" width={38.74} height={33} />
              <p className="font-medium text-base">Goggle play</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="" className="font-medium text-base">
            Card number
          </label>
          <input
            type="email"
            placeholder="263 576 754 9708"
            required
            className="py-4 px-2 text-left font-medium text-base border border-solid border-gray-300 rounded-lg placeholder:text-gray-900 outline-blue-700"
          />
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-base">Expiration</p>
            <input
              type="number"
              placeholder="06/24"
              required
              className="py-4 px-2 text-left max-w-[196px] font-medium text-base border border-solid border-gray-300 rounded-lg placeholder:text-gray-900 outline-blue-700"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-base">CVV</p>
            <input
              type="number"
              placeholder="721"
              required
              className="py-4 px-2 text-left max-w-[196px] font-medium text-base border border-solid border-gray-300 rounded-lg placeholder:text-gray-900 outline-blue-700"
            />
          </div>
        </div>

        <p className="text-gray-500 text-sm font-medium leading-4">
          Payments are secured end to end
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-500">Subtotal</p>
            <p className="text-xl text-gray-900">{ formatPriceToNaira(totalPrice) }</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-500">Discount</p>
            <p className="text-xl text-gray-900">{ formatPriceToNaira(0) }</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-500">Total</p>
            <p className="text-xl text-gray-900">{ formatPriceToNaira(totalPrice) }</p>
          </div>
        </div>

        <button className="bg-[#3538CD] text-white text-base font-bold px-2 py-3 rounded-3xl">
          Pay { formatPriceToNaira(totalPrice) }
        </button>
      </form>
    </div>
  );
};

export default CheckoutPayment;

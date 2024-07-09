const PaymentSuccessModal = () => {
  return ( 
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col gap-[29px] w-[306px] h-[362px] border rounded-3xl py-8 px-6 text-gray-900 relative">
        <div className="absolute top-3 right-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white"/>
          <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#F3F4F6"/>
          <path d="M16 8L8 16M8 8L16 16" stroke="#8C959F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_210_3122)">
            <path d="M19.0196 0.5C8.79965 0.5 0.514648 8.784 0.514648 19.003C0.514648 29.55 10.4326 39.468 20.9796 39.468C31.1986 39.468 39.4827 31.183 39.4827 20.964C39.4837 10.418 29.5656 0.5 19.0186 0.5H19.0196Z" fill="#202024" stroke="#1D2939" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.0416 38.467C29.2736 38.467 37.5676 29.967 37.5676 19.484C37.5676 8.998 29.2736 0.5 19.0416 0.5C8.81062 0.5 0.515625 9 0.515625 19.483C0.515625 29.968 8.81062 38.467 19.0416 38.467Z" fill="#6CE9A6" stroke="#202024" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.7064 10.956C27.4714 10.7206 27.1922 10.5338 26.8849 10.4064C26.5776 10.279 26.2481 10.2134 25.9155 10.2134C25.5828 10.2134 25.2533 10.279 24.946 10.4064C24.6387 10.5338 24.3595 10.7206 24.1245 10.956C22.1459 12.646 20.3923 14.5828 18.9065 16.719C18.3251 17.4936 17.7537 18.2757 17.1925 19.065C15.2455 17.565 13.7665 16.515 13.1425 16.436C12.0825 16.018 10.9325 17.196 10.2225 18.189C9.51245 19.182 8.64545 20.593 9.30745 21.528C9.55045 22.122 10.9045 23.378 12.8215 24.867C15.1095 26.658 16.7745 28.011 17.6895 28.138C19.1795 28.732 20.2295 26.921 24.5035 21.138C26.1256 19.0917 27.4986 16.8597 28.5935 14.489C28.9188 13.8967 29.0081 13.2033 28.8436 12.5479C28.6791 11.8925 28.2729 11.3235 27.7064 10.955V10.956Z" fill="white" stroke="#202024" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_210_3122">
            <rect width="40" height="40" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <p className="font-bold text-xl text-gray-900">N17,400</p>
          <p className="font-normal text-base text-gray-500 leading-[18px]">paid july 10,2024</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4 text-center">
          <p className="text-base font-medium">Thanks for your order!</p>
          <p className="text-sm font-medium text-[#667F9D]">The order confirmation has been sent to thiskhalidyusuf@gmail.com</p>
        </div>
        <button className="font-bold text-base text-center text-white p-2 bg-[#3538CD] rounded-3xl">continue to shop</button>
      </div>
    </div>
   );
}
 
export default PaymentSuccessModal;
export default function HeaderNav() {
  return (
    <div className="flex flex-row items-center justify-between p-4 sm:py-6 sm:pb-0 sm:pl-[39px] sm:pr-10 lg:px-[165px]">
      <p className="text-[28px] leading-[35px] font-extrabold text-yankees_blue">
        skilled
      </p>
      <button
        type="button"
        className="text-[16px] rounded-full leading-[28px] font-bold text-white px-6 py-2.5 bg-yankees_blue lg:py-[14px] lg:pl-[32px] lg:pr-[31px] lg:text-[18px] hover:bg-dark_blue_gray"
      >
        Get Started
      </button>
    </div>
  );
}

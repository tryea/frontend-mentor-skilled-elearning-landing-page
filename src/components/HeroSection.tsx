import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative pt-[22px] px-4 pb-[0px] bg-white flex flex-col sm:flex-row sm:pl-[39px] sm:pr-[40px] sm:h-[470px] sm:pt-[99px] sm:pb-[87px]">
      <div className="flex flex-col w-full sm:w-[398px] lg:w-[457px] sm:h-full sm:justify-center overflow-hidden">
        <h1 className="text-heading-l text-yankees_blue">
          Maximize skill, minimize budget
        </h1>
        <p className="text-roman_silver text-body-medium mt-[26px] sm:mt-[25px]">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button
          type="button"
          className="mt-6 text-body-medium font-bold text-white bg-gradient-1 h-[56px] w-[167px] flex items-center justify-center rounded-full hover:opacity-50"
        >
          Get Started
        </button>
      </div>

      <div className="w-[327px] h-[301px] bg-hero-image-mobile sm:bg-hero-image-tablet bg-cover relative mx-2 mt-[46px] sm:w-[640px] sm:h-[640px] sm:mx-0 sm:mt-0 sm:absolute sm:right-[-244px] sm:top-[-128px] " />
    </div>
  );
}

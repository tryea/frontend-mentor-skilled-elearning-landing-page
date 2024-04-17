import Image from "next/image";

export default function FeaturedCard({
  iconSrc,
  name,
  description,
}: {
  iconSrc: string;
  name: string;
  description: string;
}) {
  return (
    <div className="relative w-full pt-14 pl-7 rounded-[10px] pr-[29px] pb-8 shadow-[0px_25px_50px_rgba(6,22,141,0.0442)] bg-white sm:w-[340px]">
      <div className="absolute w-14 h-14 flex items-center justify-center top-[-24px] left-[28px]">
        <Image src={iconSrc} fill alt={`icon-${name}`} />
      </div>
      <p className="font-extrabold text-[20px] leading-[25px] text-yankees_blue">
        {name}
      </p>
      <p className="mt-4 font-medium text-[16px] leading-[26px] text-roman_silver">
        {description}
      </p>
      <p className="mt-6 text-[18px] leading-[28px] text-sasquatch_socks font-bold">
        Get Started
      </p>
    </div>
  );
}

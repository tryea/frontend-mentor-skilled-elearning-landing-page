import FeaturedCard from "./FeaturedCard";

export default function FeaturedSection() {
  const featuredData = [
    {
      iconSrc: "/icons/icon-animation.svg",
      name: "Animation",
      description:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    },

    {
      iconSrc: "/icons/icon-design.svg",
      name: "Design",
      description:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    },

    {
      iconSrc: "/icons/icon-photography.svg",
      name: "Photography",
      description:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    },
    {
      iconSrc: "/icons/icon-crypto.svg",
      name: "Crypto",
      description:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    },

    {
      iconSrc: "/icons/icon-business.svg",
      name: "Business",
      description:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    },
  ];
  return (
    <div className="bg-gradient-3 px-4 pb-[80px] sm:mt-[99px] sm:pl-[39px] sm:pr-[40px] lg:px-[165px]">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-x-[9px] sm:gap-y-8 sm:flex-wrap lg:gap-x-[30px] lg:gap-y-[56px]">
        <div className="mb-10 w-full pt-6 pr-[29px] pb-8 pl-7 rounded-[10px] bg-gradient-1 text-white text-title-extrabold sm:mb-0 sm:w-[339px] sm:pl-8 sm:pr-[21px] sm:pt-14 sm:pb-[139px] lg:w-[350px] lg:px-8 lg:pt-16 lg:pb-[138px]">
          <p>Check out our most popular courses!</p>
        </div>

        {featuredData.map((feature) => {
          return (
            <FeaturedCard
              key={feature.name}
              iconSrc={feature.iconSrc}
              name={feature.name}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
}

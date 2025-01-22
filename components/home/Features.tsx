import { Icon } from "@iconify/react/dist/iconify.js";

type Feature = {
  feature: string;
  description: string;
  id: string;
  icon: string;
  color: string;
  bg: string;
};

const Features = () => {
  const Features: Feature[] = [
    {
      feature: "Bills Payment Made Easy",
      description:
        "Pay school fees, flight tickets, utility bills, and subscriptions in just a few clicks.",
      id: "item-one",
      icon: "fa6-solid:money-bill",
      color: "text-lime-600",
      bg: "bg-lime-100",
    },

    {
      feature: "Secure Virtual Cards",
      description: "Create customizable virtual cards for online payments.",
      id: "item-three",
      icon: "ion:card",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      feature: "Escrow Services",
      description:
        "Safe and secure transactions with built-in dispute resolution.",
      id: "item-four",
      icon: "grommet-icons:services",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      feature: "Scan-to-Pay",
      description:
        "Contactless payments for schools, transportation, and more.",
      id: "item-five",
      icon: "solar:object-scan-bold",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      feature: "Smart Savings & Investments",
      description:
        "Save for your goals and invest in real estate, agriculture, and more.",
      id: "item-two",
      icon: "material-symbols:nest-found-savings",
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <section>
      <div className="mx-auto py-20 md:py-24 lg:py-28">
        <h2 className="mb-10 text-center text-2xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Why Choose LeadMonie?
        </h2>
        <div className="feature-container mx-auto max-w-sm gap-4 px-12 sm:max-w-xl md:max-w-2xl md:gap-8 lg:max-w-3xl xl:max-w-[100rem]">
          {Features.map((feature, index) => (
            <div
              key={index + 1}
              className={`${feature.id} feature-item flex flex-col space-y-5 rounded-lg px-6 py-8 transition-colors md:items-start`}
            >
              <div className={`p-3 ${feature.bg} w-fit rounded-md`}>
                <Icon
                  icon={feature.icon}
                  className={`size-7 ${feature.color}`}
                />
              </div>
              <h3 className="font-medium">{feature.feature}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Icon } from "@iconify/react/dist/iconify.js"

type Feature = {
  feature: string
  description: string
  id: string
  icon: string
  color: string
  bg: string
}

const Features = () => {
  const Features: Feature[] = [
    {
      feature: "Bills Payment Made Easy",
      description:
        "Pay school fees, flight tickets, utility bills, and subscriptions in just a few clicks.",
      id: "item-one",
      icon: "fa6-solid:money-bill",
      color: "text-red-600",
      bg: "bg-red-100",
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
  ]

  return (
    <section>
      <div className=" mx-auto py-20 md:py-24 lg:py-28">
        <h2 className="text-center text-2xl tracking-tight font-medium mb-10">
          Why Choose LeadMonie?
        </h2>
        <div className="feature-container max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[100rem] gap-4 md:gap-8 px-12 mx-auto">
          {Features.map((feature, index) => (
            <div
              key={index + 1}
              className={`${feature.id} flex flex-col md:items-start primer-medium py-8 px-6 rounded-lg space-y-5 transition-colors`}
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
  )
}

export default Features

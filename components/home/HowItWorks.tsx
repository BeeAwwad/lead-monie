import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./Button";

type step = {
  title: string;
  description: string;
};

const HowItWorks = () => {
  const steps: step[] = [
    { title: "Sign Up", description: "Create your account in minutes." },
    {
      title: "Add Funds",
      description: "Fund your wallet securely via bank transfer or card.",
    },
    {
      title: "Enjoy",
      description: "Pay bills, save, invest, and more seamlessly",
    },
  ];

  return (
    <section className="bg-slate-100">
      <div className="container mx-auto grid grid-cols-1 px-5 py-20 sm:justify-items-center md:grid-cols-2 md:py-28 lg:py-36">
        <div className="order-2 space-y-10 md:order-1">
          <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Get Started in 3 Easy Steps
          </h2>
          <ul className="space-y-5 text-slate-500">
            {steps.map((step, index) => (
              <li key={index + 1} className="flex items-center gap-3">
                <Icon icon="mdi:tick-circle" className="size-6 text-black" />
                <span>{step.description}</span>
              </li>
            ))}
          </ul>
          <Button>Download Now</Button>
        </div>
        <div className="order-1 md:order-2"></div>
      </div>
    </section>
  );
};

export default HowItWorks;

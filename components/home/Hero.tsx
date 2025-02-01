import { abril_fatface } from "@/lib/font";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto w-fit space-y-6 px-4 py-20 text-center md:space-y-8 md:py-28 lg:py-36">
        <h1
          className={`${abril_fatface} mx-auto max-w-lg text-balance text-3xl font-semibold tracking-tight antialiased sm:text-4xl md:text-5xl lg:max-w-3xl lg:text-6xl lg:font-medium xl:text-7xl 2xl:max-w-5xl 2xl:text-8xl`}
        >
          Financial Freedom Starts with LeadMonie
        </h1>
        <p className="mx-auto max-w-md md:max-w-xl md:text-xl">
          The smart way to manage your bills, savings, investments, and secure
          transitions all in one application
        </p>
        <div className="mx-auto flex w-fit gap-4">
          <Button>
            <span>Google Play</span>
            <span></span>
          </Button>
          <Button>
            <span>App Store</span>
            <span></span>
          </Button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Hero;

import Button from "./Button"

const Hero = () => {
  return (
    <section className="bg-slate-100">
      <div className="text-center w-fit mx-auto py-20 md:py-28 lg:py-36 px-4 space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold lg:font-medium text-balance max-w-lg lg:max-w-3xl 2xl:max-w-5xl xl:text-7xl 2xl:text-8xl mx-auto">
          Financial Freedom Starts with LeadMonie
        </h1>
        <p className="max-w-md mx-auto md:text-xl md:max-w-xl">
          The smart way to manage your bills, savings, investments, and secure
          transitions all in one application
        </p>
        <div className="flex gap-4 mx-auto w-fit">
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
  )
}

export default Hero

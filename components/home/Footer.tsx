import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="mx-auto mb-4 max-w-lg px-5 sm:px-0 md:mb-10 md:max-w-3xl lg:mb-16 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[90rem]">
      <div className="footer-grid grid grid-cols-1 items-center gap-5 rounded-xl bg-slate-700 p-4 md:grid-cols-2 md:gap-10 md:p-10 lg:rounded-3xl lg:p-12 xl:grid-cols-7 2xl:grid-cols-10 2xl:p-20">
        {/* Left Section */}
        <div className="relative min-h-[28rem] overflow-hidden rounded-xl bg-slate-500 p-4 px-6 text-center sm:px-10 md:p-5 md:px-8 lg:min-h-[32rem] lg:rounded-3xl lg:p-8 lg:px-10 xl:col-span-3 xl:p-12 xl:px-14 2xl:col-span-4 2xl:min-h-[36rem]">
          <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl md:text-xl xl:text-2xl">
            Download The App On The App Store Or Play Store
          </h3>
          <div className="mb-4 flex flex-col justify-center gap-4">
            <Button className="text-white">Download for iOS</Button>
            <Button className="text-white">Download for Android</Button>
          </div>
          <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 justify-center sm:bottom-0 lg:bottom-10 xl:bottom-6 2xl:bottom-20">
            <div className="max-h-56 min-w-60 max-w-64 rounded-t-3xl sm:min-w-64 sm:max-w-80 md:max-w-60 lg:min-w-72 xl:min-w-80 xl:max-w-96 2xl:min-w-96 2xl:max-w-sm">
              <Image
                className="w-full"
                src={"/app-one.png"}
                alt="application"
                height={500}
                width={250}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-5 text-sm text-white md:text-base lg:text-lg xl:col-span-4 2xl:col-span-6">
          <div className="max-w-md">
            <h4 className="mb-6 text-xl font-bold lg:text-2xl">LeadMonie</h4>
            <p className="mb-8 text-slate-300">
              LeadMonie is a leading platform for managing your finances and
              investments in one place with ease and convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="mb-3 text-lg font-semibold lg:text-xl">Company</h5>
              <ul className="space-y-2 text-slate-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-lg font-semibold lg:text-xl">
                Resources
              </h5>
              <ul className="space-y-2 text-slate-300">
                <li>FAQs</li>
                <li>Support Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

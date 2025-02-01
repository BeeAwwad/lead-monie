import { abril_fatface } from "@/lib/font";
import NewsletterForm from "./NewsletterForm";

const NewsLetter = () => {
  return (
    <section className="">
      <div className="mx-auto flex flex-col items-center py-3 sm:max-w-xl md:max-w-5xl">
        <div className="px-4 py-12 lg:py-20">
          <h2
            className={`${abril_fatface} mb-10 text-center text-2xl font-medium tracking-tight antialiased md:text-4xl lg:text-5xl`}
          >
            Get notified of future updates!
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-base font-medium text-slate-600">
            Put your email below to stay up to date on future releases and new
            features of Habisure. We'll keep you in the loop on what's to come!
          </p>

          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

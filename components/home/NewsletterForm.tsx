import Button from "./Button";

const NewsletterForm = () => {
  return (
    <form
      action="#"
      className="flex w-full flex-col md:mx-auto md:max-w-md md:flex-row md:justify-center"
    >
      <label htmlFor="email">
        <input
          type="email"
          autoComplete="email"
          className="mb-3 w-full rounded-l-lg rounded-r-lg border-2 border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none md:mb-0 md:rounded-r-none"
          placeholder="Your email address"
        />
      </label>
      <Button className="bg-slate-50">GET UPDATES</Button>
    </form>
  );
};

export default NewsletterForm;

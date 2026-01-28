export default function Newsletter() {
  return (
    <section className="bg-[#a4be57] rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] p-8">
      <div className="text-center mb-6">
        <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-4">Subscribe</h2>
        <h3 className="font-['Caprasimo'] text-[24px] leading-[28.8px] mb-2">
          Subscribe to <em>Triple Berry Blob</em>,
        </h3>
        <p className="font-['Caprasimo'] text-[24px] leading-[28.8px]">the WPRB newsletter</p>
        <p className="font-['Figtree'] font-bold text-base mt-4">
          Get all the latest WPRB news delivered to your inbox!
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-['Figtree'] font-bold text-sm mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] focus:outline-none focus:ring-2 focus:ring-[#d36967]"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block font-['Figtree'] font-bold text-sm mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] focus:outline-none focus:ring-2 focus:ring-[#d36967]"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-['Figtree'] font-bold text-sm mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] focus:outline-none focus:ring-2 focus:ring-[#d36967]"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#d36967] text-white font-['Caprasimo'] text-base rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
}

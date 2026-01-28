export default function Newsfeed() {
  const news = [
    {
      image: "https://wprb.com/wp-content/uploads/2025/12/wprb-store-social.jpg",
      title: "Shop WPRB",
      description: "Shirts, mugs, hats, magnets, stickers and more! All to benefit WPRB!",
      url: "https://wprb.com/shop-wprb/"
    },
    {
      image: "https://wprb.com/wp-content/uploads/2026/01/spring26-sched.png",
      title: "Spring 2026 Schedule",
      description: "Out new schedule starts January 26th.",
      url: "https://wprb.com/spring-2026-schedule/"
    },
    {
      image: "https://wprb.com/wp-content/uploads/2026/01/wprbest-thumbnail-w-border.png",
      title: "WPRB's Best Records of 2025",
      description: "See WPRB's curated collection of the top releases of 2025!",
      url: "https://wprb.com/wprbs-best-records-of-2025/"
    },
    {
      image: "https://wprb.com/wp-content/uploads/2025/12/3-Jonshirt2025_yestext_yesyellow-scaled.png",
      title: "Jon Solomon's 25-Hour Holiday Radio Show",
      description: "The tradition returns this Christmas Eve!",
      url: "https://wprb.com/jon-solomons-25-hour-holiday-radio-show-4/"
    }
  ];
  return (
    <section className="mb-16">
      <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-8 text-center">Newsfeed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="bg-white rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] overflow-hidden hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-['Caprasimo'] text-[24px] leading-[28.8px] mb-3">{item.title}</h3>
              <p className="font-['Figtree'] text-base mb-4">{item.description}</p>
              <span className="font-['Caprasimo'] text-sm text-[#d36967]">Read More: {item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

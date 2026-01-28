export default function UpcomingConcerts() {
  const concerts = [
    { date: "January 31", year: "2026", artist: "Riverside, My Favorite, Polaroid Fade", venue: "@ PhilaMOCA", location: "Philadelphia, PA" },
    { date: "January 31", year: "2026", artist: "Emily Robb & the ER Band, Walnut Brain", venue: "@ Solar Myth", location: "Philadelphia, PA" },
    { date: "January 31", year: "2026", artist: "Handsome Dick Manitoba", venue: "@ Kung Fu Necktie", location: "Philadelphia, PA" },
    { date: "February 6", year: "2026", artist: "Dan Decon", venue: "@ Underground Arts", location: "Philadelphia, PA" },
    { date: "February 7", year: "2026", artist: "Sprints", venue: "@ Johnny Brenda's", location: "Philadelphia, PA" },
    { date: "February 15", year: "2026", artist: "Marshall Allen's Ghost Horizons", venue: "@ Solar Myth", location: "Philadelphia, PA" }
  ];
  return (
    <section className="mb-16 bg-[rgba(235,162,73,0.25)] rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] p-8">
      <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-8 text-center">Upcoming Concerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {concerts.map((concert, index) => (
          <div
            key={index}
            className="bg-white rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] p-4"
          >
            <div className="flex gap-4 mb-3">
              <div className="bg-[#eba34a] rounded-[5px] border-2 border-black px-3 py-2 text-center min-w-[80px]">
                <p className="font-['Caprasimo'] text-base">{concert.date}</p>
                <p className="font-['Figtree'] text-sm">{concert.year}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-['Caprasimo'] text-base mb-2">{concert.artist}</h4>
                <p className="font-['Figtree'] text-sm mb-1">{concert.venue}</p>
                <p className="font-['Figtree'] text-sm">{concert.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://wprb.com/online-concert-calendar/"
          className="inline-block px-6 py-3 bg-[#d36967] text-white font-['Caprasimo'] text-base rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
        >
          See the Full List &gt;
        </a>
      </div>
    </section>
  );
}

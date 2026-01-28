export default function LiveSessions() {
  return (
    <section className="mb-16">
      <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-8 text-center">Live Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] overflow-hidden">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NZL1ESr0SyM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="bg-white rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] overflow-hidden">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kM-axFD2UpU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/playlist?list=PLCmp45OPSjDH2I8_UcEim_02YGYq5A3zG"
          className="inline-block px-6 py-3 bg-[#a4be57] text-black font-['Caprasimo'] text-base rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
        >
          See More
        </a>
      </div>
    </section>
  );
}

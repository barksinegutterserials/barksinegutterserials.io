export default function TodaysSchedule() {
  const schedule = [
    { time: "5am", show: "On the Hunt!", dj: "DJ Sharke", url: "https://playlists.wprb.com/WPRB/show/294599/?layout=1" },
    { time: "7am", show: "bass dumpster", dj: "maetrix", url: "https://playlists.wprb.com/WPRB/show/294591/?layout=1" },
    { time: "10am", show: "Mindless Thoughts", dj: "Navi", url: "https://playlists.wprb.com/WPRB/show/294588/?layout=1" },
    { time: "12pm", show: "The Clothesline", dj: "Wilbo", url: "https://playlists.wprb.com/WPRB/show/239616/?layout=1" },
    { time: "3pm", show: "Beat Stew", dj: "chef patti", url: "https://playlists.wprb.com/WPRB/show/275403/?layout=1" },
    { time: "5pm", show: "The Sonic Bloom", dj: "Esoterica", url: "https://playlists.wprb.com/WPRB/show/260776/?layout=1" },
    { time: "8pm", show: "Uncountable Measures", dj: "turshu", url: "https://playlists.wprb.com/WPRB/show/302658/?layout=1" },
    { time: "11pm", show: "designmusik", dj: "yin", url: "https://playlists.wprb.com/WPRB/show/302659/?layout=1" },
    { time: "1am", show: "The Sunshower Mix", dj: "DJ Jaune", url: "https://playlists.wprb.com/WPRB/show/302660/?layout=1" },
    { time: "3am", show: "plastic pules", dj: "environmental justice", url: "https://playlists.wprb.com/WPRB/show/302661/?layout=1" }
  ];
  return (
    <section className="mb-16">
      <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-8 text-center">Today's Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="bg-white rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] p-4 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#eba34a] rounded-[5px] border-2 border-black px-3 py-1">
                <p className="font-['Figtree'] font-bold text-sm">{item.time}</p>
              </div>
              <div className="flex-1">
                <h4 className="font-['Caprasimo'] text-base mb-1">{item.show}</h4>
                <p className="font-['Figtree'] text-sm italic">with {item.dj}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="https://wprb.com/schedule/"
          className="inline-block px-6 py-3 bg-[#d36967] text-white font-['Caprasimo'] text-base rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
        >
          See Full Schedule
        </a>
      </div>
    </section>
  );
}

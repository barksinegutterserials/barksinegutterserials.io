export default function RecentPlaylists() {
  const playlists = [
    { title: 'The Sunshower Mix', subtitle: '"peaking thru the clouds…"', dj: "DJ Jaune", url: "https://playlists.wprb.com/WPRB/pl/21884335/?layout=1" },
    { title: 'designmusik', subtitle: '"I: "Canvas""', dj: "yin", url: "https://playlists.wprb.com/WPRB/pl/21882325/?layout=1" },
    { title: 'Uncountable Measures', subtitle: '"Winds of Change"', dj: "turshu", url: "https://playlists.wprb.com/WPRB/pl/21889335/?layout=1" },
    { title: 'The Sonic Bloom', subtitle: '"Hey there, it\'s Tuesday!"', dj: "Esoterica", url: "https://playlists.wprb.com/WPRB/pl/21888668/?layout=1" },
    { title: 'Beat Stew', subtitle: '"stew of unrelenting focus — swirling the huge vat in the middle of a cold wasteland"', dj: "chef patti", url: "https://playlists.wprb.com/WPRB/pl/21888248/?layout=1" },
    { title: 'The Clothesline', subtitle: '"People who Died RIP 2025 Part 4"', dj: "Wilbo", url: "https://playlists.wprb.com/WPRB/pl/21887502/?layout=1" },
    { title: 'Mindless Thoughts', subtitle: '', dj: "Navi", url: "https://playlists.wprb.com/WPRB/pl/21883879/?layout=1" },
    { title: 'bass dumpster', subtitle: '', dj: "maetrix", url: "https://playlists.wprb.com/WPRB/pl/21884548/?layout=1" }
  ];
  return (
    <section className="mb-16">
      <h2 className="font-['Caprasimo'] text-[29.6px] leading-[35.52px] mb-8 text-center">Recent Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {playlists.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="bg-white rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] p-4 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
          >
            <h4 className="font-['Caprasimo'] text-base mb-2">{item.title}</h4>
            {item.subtitle && <p className="font-['Figtree'] text-sm mb-2">{item.subtitle}</p>}
            <p className="font-['Figtree'] text-sm italic">with {item.dj}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function NowPlaying() {
  return (
    <div className="bg-[#e06d6d] border-b-4 border-black">
      <div className="max-w-[1500px] mx-auto px-4 py-8">
        <div className="bg-white rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] p-6 max-w-2xl mx-auto">
          <div className="flex gap-6">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/bc/e0/e7/bce0e78b-be7d-648c-d910-59ffa456ad37/00600445004825.rgb.jpg/225x225bb.jpg"
              alt="Album Cover"
              className="w-32 h-32 rounded-[5px] border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)]"
            />
            <div className="flex-1">
              <h4 className="font-['Caprasimo'] text-base mb-2">Now Playing</h4>
              <p className="font-['Figtree'] font-bold text-sm mb-1">Artist: Elliott Smith</p>
              <p className="font-['Figtree'] font-bold text-sm mb-1">Song: "Bled White"</p>
              <p className="font-['Figtree'] font-bold text-sm mb-4">Album: <em>XO</em></p>
              <div className="space-y-2">
                <a href="https://playlists.wprb.com/WPRB/show/302660" className="block font-['Figtree'] text-[16.8px] leading-[26.04px] underline hover:text-[#d36967] transition-colors cursor-pointer">
                  The Sunshower Mix with DJ Jaune
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://playlists.wprb.com/WPRB/pl/21884335/?layout=1"
              className="px-4 py-2 bg-[#a4be57] text-black font-['Caprasimo'] text-sm rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
            >
              View Full Playlist
            </a>
            <a
              href="https://playlists.wprb.com/WPRB/?layout=1#chat"
              className="px-4 py-2 bg-[#d36967] text-white font-['Caprasimo'] text-sm rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
            >
              Join the Chat!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

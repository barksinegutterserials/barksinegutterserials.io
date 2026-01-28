export default function Footer() {
  return (
    <footer className="bg-[#eba34a] border-t-4 border-black">
      <div className="max-w-[1500px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-['Caprasimo'] text-base mb-4">Listen & Support</h4>
            <ul className="space-y-2">
              <li><a href="https://www.radiorethink.com/tuner/?stationCode=wprb&stream=hi&footer" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Listen to WPRB</a></li>
              <li><a href="http://pledge.wprb.com/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Donate</a></li>
              <li><a href="https://playlists.wprb.com/WPRB/?layout=1" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Current Playlist & Listener Chat</a></li>
              <li><a href="https://wprb.com/schedule/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Schedule</a></li>
              <li><a href="http://shop.wprb.com" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Shop WPRB</a></li>
              <li><a href="https://wprb.com/online-concert-calendar/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Concert Recs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Caprasimo'] text-base mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="https://wprb.com/about/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">About WPRB</a></li>
              <li><a href="https://wprbhistory.org/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">History</a></li>
              <li><a href="https://wprb.com/contact" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Contact Us</a></li>
              <li><a href="https://wprb.com/music-submissions/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Music Submissions</a></li>
              <li><a href="https://wprb.com/underwriting/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Underwriting</a></li>
              <li><a href="https://wprb.com/be-a-wprb-dj/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Be a WPRB DJ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Caprasimo'] text-base mb-4">News & More</h4>
            <ul className="space-y-2">
              <li><a href="https://wprb.com/station-news/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Station News</a></li>
              <li><a href="https://wprb.us14.list-manage.com/subscribe/post?u=bddbf1710375448960a539255&id=56ac7bf96e&f_id=0041b4e5f0" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Receive Monthly Charts</a></li>
              <li><a href="https://wprb.com/wp-content/uploads/2022/01/WPRB-Form-2100-Schedule-396-2022.pdf" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">FCC EEO Report</a></li>
              <li><a href="https://publicfiles.fcc.gov/fm-profile/WPRB" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">FCC Public File</a></li>
              <li><a href="https://wprb.com/terms-of-service/" className="font-['Figtree'] text-[16.8px] leading-[26.04px] hover:text-[#d36967] transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Caprasimo'] text-base mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/wprbfm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="http://instagram.com/wprb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@wprblive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <img
              src="https://wprb.com/wp-content/uploads/2024/08/wprb-knuckle-tattoos.png"
              alt="Illustration of knuckles with tattoos reading 'WPRB Princeton'"
              className="w-full max-w-[200px] mb-4"
            />
          </div>
        </div>
        <div className="border-t-2 border-black pt-6 text-center">
          <p className="font-['Figtree'] text-sm mb-2">WPRB 103.3 fm / PO Box 388 / Princeton, NJ 08542</p>
          <p className="font-['Figtree'] text-sm">© Princeton Broadcasting Service, INC – 2026</p>
        </div>
      </div>
    </footer>
  );
}

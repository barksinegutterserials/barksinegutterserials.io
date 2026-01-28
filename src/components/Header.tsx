import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stationInfoOpen, setStationInfoOpen] = useState(false);
  return (
    <header className="bg-[#eba34a] border-b-4 border-black">
      <div className="max-w-[1500px] mx-auto">
        {/* Top bar with social and action buttons */}
        <div className="flex items-center justify-between px-4 py-3 border-b-4 border-black">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/wprbfm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
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
              className="w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.radiorethink.com/tuner/?stationCode=wprb&stream=hi&listennow"
              className="px-4 py-2 bg-[#a4be57] text-black font-['Caprasimo'] text-sm rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
            >
              LISTEN NOW!
            </a>
            <a
              href="https://pledge.wprb.com/"
              className="px-4 py-2 bg-[#d36967] text-white font-['Caprasimo'] text-sm rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] transition-all cursor-pointer"
            >
              DONATE
            </a>
          </div>
        </div>
        {/* Logo and main nav */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            <a href="https://wprb.com/" className="cursor-pointer">
              <img
                src="https://wprb.com/wp-content/uploads/2025/01/wprb-logo.svg"
                alt="WPRB 103.3 FM – Princeton, NJ"
                className="h-20 w-auto"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6">
            <div className="relative">
              <button
                onClick={() => setStationInfoOpen(!stationInfoOpen)}
                className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer"
              >
                Station Info
              </button>
              {stationInfoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-black rounded-[5px] shadow-[4px_4px_0px_0px_rgb(0,0,0)] p-4 min-w-[200px] z-50">
                  <a href="https://wprb.com/about/" className="block py-2 font-['Figtree'] text-black hover:text-[#d36967] transition-colors cursor-pointer">About</a>
                  <a href="https://www.wprbhistory.org" className="block py-2 font-['Figtree'] text-black hover:text-[#d36967] transition-colors cursor-pointer">WPRB History</a>
                  <a href="https://wprb.com/contact" className="block py-2 font-['Figtree'] text-black hover:text-[#d36967] transition-colors cursor-pointer">Contact</a>
                </div>
              )}
            </div>
            <a href="https://wprb.com/schedule/" className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Schedule</a>
            <a href="https://wprb.com/station-news" className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Station News</a>
            <a href="https://wprb.com/online-concert-calendar/" className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Concert Recs</a>
            <a href="https://news.wprb.com/" className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">News + Culture</a>
            <a href="https://shop.wprb.com" className="font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Shop WPRB</a>
          </nav>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center mx-auto cursor-pointer"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white border-2 border-black rounded-[5px] shadow-[4px_4px_0px_0px_rgb(0,0,0)] p-4">
              <a href="https://wprb.com/about/" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">About</a>
              <a href="https://www.wprbhistory.org" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">WPRB History</a>
              <a href="https://wprb.com/contact" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Contact</a>
              <a href="https://wprb.com/schedule/" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Schedule</a>
              <a href="https://wprb.com/station-news" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Station News</a>
              <a href="https://wprb.com/online-concert-calendar/" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Concert Recs</a>
              <a href="https://news.wprb.com/" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">News + Culture</a>
              <a href="https://shop.wprb.com" className="block py-2 font-['Figtree'] font-bold text-black hover:text-[#d36967] transition-colors cursor-pointer">Shop WPRB</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

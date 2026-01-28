import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import ScheduleHero from "./components/ScheduleHero";
import TodaysSchedule from "./components/TodaysSchedule";
import RecentPlaylists from "./components/RecentPlaylists";
import Newsfeed from "./components/Newsfeed";
import Newsletter from "./components/Newsletter";
import UpcomingConcerts from "./components/UpcomingConcerts";
import LiveSessions from "./components/LiveSessions";
import Footer from "./components/Footer";
import "./globals.css";
function App() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <a
        href="#wp--skip-link--target"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#eba34a] focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <NowPlaying />
      <ScheduleHero />
      <main id="wp--skip-link--target" className="max-w-[1500px] mx-auto px-4 py-8">
        <TodaysSchedule />
        <RecentPlaylists />
        <Newsfeed />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          <Newsletter />
          <div className="space-y-8">
            <a href="https://www.radiorethink.com/tuner/?stationCode=wprb&stream=hi&listennow" className="block cursor-pointer">
              <img
                src="https://wprb.com/wp-content/uploads/2025/04/listen-to-wprb-wide.jpg"
                alt="Listen to WPRB!"
                className="w-full rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all"
              />
            </a>
            <a href="https://wprb.com/cars" className="block cursor-pointer">
              <img
                src="https://wprb.com/wp-content/uploads/2025/04/car-dono.jpg"
                alt="Click to donate your car to WPRB"
                className="w-full rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all"
              />
            </a>
            <a href="https://wprb.com/otherways/" className="block cursor-pointer">
              <img
                src="https://wprb.com/wp-content/uploads/2025/10/other-ways-banner-2.jpg"
                alt="Other ways to support WPRB"
                className="w-full rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all"
              />
            </a>
          </div>
        </div>
        <UpcomingConcerts />
        <LiveSessions />
      </main>
      <Footer />
    </div>
  );
}
export default App;

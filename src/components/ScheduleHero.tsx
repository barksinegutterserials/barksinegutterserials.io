export default function ScheduleHero() {
  return (
    <div className="bg-[#a5b2bd] border-b-4 border-black">
      <div className="max-w-[1500px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <a href="https://wprb.com/spring-2026-schedule/" className="cursor-pointer">
            <img
              src="https://wprb.com/wp-content/uploads/2026/01/spring26-sched.png"
              alt="WPRB Spring 2026 schedule"
              className="w-full rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all"
            />
            <p className="text-center mt-4 font-['Caprasimo'] text-[24px] leading-[28.8px] hover:text-[#d36967] transition-colors">
              Spring 2026 Schedule!
            </p>
          </a>
          <a href="https://wprb.com/thank-you-2025/" className="cursor-pointer">
            <img
              src="https://wprb.com/wp-content/uploads/2025/11/Riley-WPRB-Sticker.png"
              alt=""
              className="w-full rounded-[15px] border-4 border-black shadow-[6px_6px_0px_0px_rgb(0,0,0)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all"
            />
            <p className="text-center mt-4 font-['Caprasimo'] text-[24px] leading-[28.8px] hover:text-[#d36967] transition-colors">
              Fall Membership Drive a success!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

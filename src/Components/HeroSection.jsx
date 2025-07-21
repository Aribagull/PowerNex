import Video from "../Assets/video.mp4";

export default function HeroSection() {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="relative w-full mx-4 sm:mx-12 my-5 mt-28 sm:mt-32 overflow-hidden rounded-2xl">
        <video
          className="w-full h-[400px] sm:h-[570px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="absolute inset-0 flex flex-col justify-center mt-10 sm:mt-28 pl-4 sm:pl-12 text-yellow-400 z-20">
          <h1 className="text-2xl sm:text-5xl font-semibold mb-3 sm:mb-6">
            Ideas to Help You Say
          </h1>
          <div>
            <p className="text-sm sm:text-lg font-semibold mb-2 sm:mb-5">
              SHOP NOW UP TO 70% OFF
            </p>
            <p className="text-sm sm:text-lg font-semibold">
              PROMOTION AND STOCKS ARE LIMITED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

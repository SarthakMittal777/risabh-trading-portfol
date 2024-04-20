import { YouTubeEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const HomeSocialSection = () => {
  return (
    <section className="px-4 py-6 mx-auto space-y-6">
      <h2 className="font-bold font-kalnia text-5xl text-primary text-center">
        Social Media Gallery
      </h2>
      <div className="flex flex-wrap justify-around items-center mx-auto gap-4">
        <YouTubeEmbed
          url="https://youtu.be/Cj7ugUqD0a0"
          className="w-1/3 aspect-video"
          width={325}
          height={220}
        />
        <YouTubeEmbed
          url="https://youtu.be/GVFMyClF6LE"
          className="w-1/3 aspect-video"
          width={325}
          height={220}
        />
        <YouTubeEmbed
          url="https://youtu.be/tSxLlYzyjfw"
          className="w-1/3 aspect-video"
          width={325}
          height={220}
        />
      </div>
      <div className="flex">
        <a
          href="https://youtube.com/@Mortaltraderofficiall"
          target="_blank"
          className="group border-2 border-[#FF0000] flex items-center gap-2 px-3 py-1.5 mx-auto text-[#FF0000] hover:text-white hover:bg-[#FF0000] rounded-lg"
        >
          <FaYoutube
            size={25}
            className="inline-block group-hover:animate-pulse -mb-0.5"
          />
          View More Strategies
        </a>
      </div>
      <div className="flex flex-wrap justify-around items-center mx-auto gap-4">
        <InstagramEmbed
          url="https://www.instagram.com/reel/C4c1PocPuXl/"
          width={328}
          height={450}
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/C4Nh3VXP7Pb/"
          width={328}
          height={450}
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/C3MUBoZv0J2/"
          width={328}
          height={450}
        />
      </div>
      <div className="flex">
        <a
          href="https://www.instagram.com/mortalxtrader"
          target="_blank"
          className="group border-2 border-[#833AB4] flex items-center gap-2 px-3 py-1.5 mx-auto text-[#833AB4] hover:text-white hover:bg-[#833AB4] rounded-lg"
        >
          <RiInstagramFill
            size={25}
            className="inline-block group-hover:animate-pulse -mb-0.5"
          />
          View More Reels
        </a>
      </div>
    </section>
  );
};

export default HomeSocialSection;

import { Link } from "react-router-dom";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex bg-primary text-gray-200 px-6 py-4 min-h-28">
      <div className="w-1/3">
        <div className="w-full">
          <Link to="/" className="w-full">
            <img
              src="/brand/logo.png"
              alt="Mortal Trading"
              className="h-24 mx-auto"
            />
          </Link>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-white text-2xl font-semibold font-kalnia">
            Mortal Trading
          </h1>
          <p>
            Be Fearful When Others Are Greedy. Be Greedy When Others are
            Fearful.
          </p>
          <div className="[&>*>*]:inline space-x-8 text-gray-300 hover:[&>a]:text-white">
            <a href="https://www.instagram.com/mortalxtrader">
              <RiInstagramFill size={25} />
            </a>
            <a href="https://telegram.me/+5F0nEmL-VW4zYzBl">
              <FaTelegramPlane size={25} />
            </a>
            <a href="https://youtube.com/@Mortaltraderofficiall">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/3"></div>
    </footer>
  );
};

export default Footer;

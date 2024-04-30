import { Link } from "react-router-dom";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className=" bg-primary text-gray-200 px-6 py-4 min-h-28"
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="md:w-1/3">
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
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h2 className="text-xl font-semibold my-2">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/#about">About Us</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li>
                  <a href="/#footer">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold my-2">Socials</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/mortalxtrader"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://telegram.me/+5F0nEmL-VW4zYzBl"
                    target="_blank"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@Mortaltraderofficiall"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold my-2">Services</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/binary-options-trading">
                    Binary Options Trading
                  </Link>
                </li>
                <li>
                  <Link to="/services/future-and-options">
                    Future and Options
                  </Link>
                </li>
                <li>
                  <Link to="/services/stock-market-consultancy">
                    Stock Market Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/services/share-market-consultancy">
                    Share Market Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/services/forex-trading">Forex Trading</Link>
                </li>
                <li>
                  <Link to="/services/crypto-currency-trading">
                    Crypto Currency Trading
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 pt-4 border-t text-xs">
        <p>&copy; {year} Mortal Trading. All Rights Reserved.</p>
        <p>
          Powered by <a>Growsoc Technologies</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

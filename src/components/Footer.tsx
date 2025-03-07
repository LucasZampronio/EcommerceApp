import Logo from '../Images/Icons/LogomarkWhite.svg';
import Insta from '../Images/Icons/Instagram.svg';
import Github from '../Images/Icons/Github.svg';
import Yt from '../Images/Icons/Youtube.svg';
import Master from '../Images/Icons/Masternocolor.svg';
import Amex from '../Images/Icons/Amexnocolor.svg';
import Visa from '../Images/Icons/Visanocolor.svg';

function Footer() {
  return (
    <section className="bg-white text-white font-[Inter]">
      <div className="flex items-center justify-between h-40 p-8 bg-neutral-100 border-b-2 pl-34">
        <div>
          <h1 className="text-xl font-extrabold  text-neutral-900">Join Our Newsletter</h1>
          <h2 className="text-neutral-500 font-normal text-[14px] mt-4">We love to surprise our subscribers with occasional gifts.</h2>
        </div>
        <div className="flex items-center gap-4 mr-34">
          <input type="text"placeholder="Your email address"className="px-4  py-2 w-90 border rounded-[6px] focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-900"/>
          <button className="px-6 py-2.5 bg-neutral-900 text-neutral-100 text-[14px]  rounded-[6px] hover:bg-neutral-600 font-medium "> Subscribe</button>
        </div>
      </div>
      {/*PARTE DE BAIXO DO FOOTER*/}
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Ecommerce Logo" className="w-10 h-10" />
            <h1 className="text-[20px] text-neutral-800 font-extrabold">Ecommerce</h1>
          </div>
          <p className="text-neutral-500 font-normal text-[14px] mb-4">DevCut is a YouTube channel for practical project-based learning.</p>
          <div className="flex gap-6">
            <a href="https://github.com" aria-label="Github">
              <img src={Github} alt="Github" className="w-6 h-6 filter grayscale hover:grayscale-0" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={Insta} alt="Instagram" className="w-6 h-6 filter grayscale hover:grayscale-0" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <img src={Yt} alt="YouTube" className="w-6 h-6 filter grayscale hover:grayscale-0" />
            </a>
          </div>
        </div>
        <div>
          <p className=" mb-4 text-neutral-400 text-[14px] font-medium">SUPPORT</p>
          <nav>
            <ul className="space-y-2 font-medium text-[14px] text-neutral-500">
              <li><a href="/faq" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">FAQ</a></li>
              <li><a href="/terms" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Terms of use</a></li>
              <li><a href="/privacy" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-neutral-400 text-[14px] font-medium mb-4 ">COMPANY</p>
          <nav>
            <ul className="space-y-2 text-neutral-300 text-[14px] font-medium">
              <li><a href="/about" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">About us</a></li>
              <li><a href="/contact" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Contact</a></li>
              <li><a href="/careers" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Careers</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-neutral-400 text-[14px] font-medium mb-4 ">SHOP</p>
          <nav>
            <ul className="space-y-2 text-neutral-300 text-[14px] font-medium">
              <li><a href="/account" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">My Account</a></li>
              <li><a href="/checkout" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Checkout</a></li>
              <li><a href="/cart" className="font-medium text-[14px] text-neutral-500 hover:text-neutral-300">Cart</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className=" mb-4 text-neutral-400 text-[14px] font-medium">ACCEPTED PAYMENTS</p>
          <div className="flex gap-4 font-medium text-[14px] text-neutral-500">
            <img src={Master} alt="Mastercard" className="w-10 h-6 filter grayscale hover:grayscale-0" />
            <img src={Amex} alt="Amex" className="w-10 h-6 filter grayscale hover:grayscale-0" />
            <img src={Visa} alt="Visa" className="w-10 h-6 filter grayscale hover:grayscale-0" />
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-neutral-100 ">
        <p className="text-neutral-500 text-[14px] font-normal ">© 2023 DevCut. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
  
import cart from '../Images/Icons/Cart.svg'
import logo from '../Images/Logomark.svg'
import profile from '../Images/Icons/ProfileRounded.svg'
function Header() {
    return (
        <section className="w-full">
            <aside className="flex font-normal justify-center bg-neutral-900 h-10 font-[Inter]">
                <h1 className="text-neutral-100 text-[14px] items-center justify-center mt-3" >Get 25% OFF on your first order. Order Now</h1>
            </aside>
            <div className="flex  mt-5 mb-5 justify-between">
                <div className="flex w-150 justify-end ">
                    <div className="flex items-center gap-3 ">
                        <img src={logo} className='w-12 h-12' alt="" />
                        <h1 className='font-[Inter] text-neutral-900 capitalize font-extrabold text-[19px]'>Ecommerce</h1>
                    </div>
                    <div className="flex  justify-start items-center">
                        <nav className="flex pl-26">
                            <ul className=' text-neutral-500 font-medium font-[Inter] text-[14px] flex justify-start gap-8'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>About</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center mr-40 gap-12  ">
                    <img className='w-6 h-6' src={cart} alt="" />
                    <img className='w-6 h-6' src={profile} alt="" />
                </div>
            </div>
        </section>
    );
  }
  
  export default Header;
  
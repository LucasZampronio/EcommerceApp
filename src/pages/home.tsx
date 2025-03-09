
import Header from '../components/Header'
import RightArrow from '../Images/Icons/RightArrowWhite.svg'
import Guyimage from '../Images/Hero Image.svg'
import Star from '../Images/Estrela.svg'
import Background from '../Images/Background.svg'
import Footer  from '../components/Footer'
import Truck from '../Images/Truck.svg'
import Badge from '../Images/Badge.svg'
import Shield from '../Images/Shield.svg'
import Mockup from '../Images/Mockup.svg'
import Sleek from '../Images/Sleek.svg'
import Tess from '../Images/Tess.svg'
import Sweetshirts from '../Images/Sweatshirts.svg'
import CategoryImage from'../Images/Category Image.svg'

function Home() {
  return (
    <div>
        <Header />
          {/*PRIMEIRA SEÇÃO */}
        <section className='bg-neutral-100 w-full h-142'>
          <div className='flex font-[Inter] items-center justify-between  w-full h-142'>
            <div className='ml-37'>
              <h1 className='text-neutral-800 font-bold text-[32px]'>Fresh Arrivals Online</h1>
              <h2 className='text-neutral-600 font-normal tex-[14px] mt-5'>Discover Our Newest Collection Today.</h2>

              <div className=' border-2 rounded-[6px] mt-16 gap-4 flex bg-neutral-900 w-50 hover:border-neutral-600 hover:bg-neutral-600 justify-center items-center pt-3 pb-3'>
                <button className='font-medium text-[14px] text-neutral-100'>View Collection</button>
                <img src={RightArrow} alt="" />
              </div>
            </div>
            <div>
            {/*IMAGENS PRIMEIRA SEÇÃO*/}
            <div className='grid grid-cols-1 grid-rows-1 h-141  mr-20'>
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 z-10 self-start translate-y-32 -translate-x-22' src={Star} alt="Star" />
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 w-110 h-auto self-end z-0 -translate-x-26 -translate-y-1' src={Background} alt="Background" />
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 w-86 h-auto translate-y-16 z-20' src={Guyimage} alt="Model" />
            </div>
            </div>
          </div>
        </section>
            {/*SEGUNDA SEÇÃO*/}
        <section className='w-full flex flex-col items-center justify-center font-[Inter]'>
          <div className=' w-308 h-60 mt-30 mb-20 p-4 rounded-lg'>
            <div className='grid grid-cols-3 gap-4 h-full'>
              <div className='bg-white rounded-lg w-80  items-center justify-center'>
                  <img src={Truck} alt="" />
                  <h1 className='font-bold mt-4 text-neutral-800 text-[16px]'>Free Shipping</h1>
                  <p className='mt-4 text-neutral-600 font-normal tex-[14px]'>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
              </div>
              <div className='bg-white rounded-lg w-80 items-center justify-center'>
                  <img src={Badge} alt="" />
                  <h1 className='font-bold mt-4 text-neutral-800 text-[16px]'>Satisfaction Guarantee</h1>
                  <p className='mt-4 text-neutral-600 font-normal tex-[14px]'>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
              </div>
              <div className='bg-white rounded-lg w-70  items-center justify-center'>
                  <img src={Shield} alt="" />
                  <h1 className='font-bold mt-4 text-neutral-800 text-[16px]' >Secure Payment</h1>
                  <p className='mt-4 text-neutral-600 font-normal tex-[14px]'>Your security is our priority. Your payments are secure with us.</p>
              </div>
            </div>
          </div>
            {/*CARROSEL*/}
          <div className=' w-308 h-160 mb-20 font-[Inter]'>
            <div className='text-center items-center'>
              <h1 className='mb-2 font-medium text-[14px] text-neutral-400 pr-20'>SHOP NOW  </h1>
              <h2 className='mb-30 pr-6 text-neutral-900 font-bold text-[24px]'>Best Selling</h2>
            </div>
            <div className='grid grid-cols-4  gap-6 ml-10'>
              <div>
                <img className='bg-neutral-100 p-2' src={Sweetshirts} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Elegant Ebony Sweatshirts</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$35.00</p>
                </div>
              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Sleek} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Sleek and Cozy Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$57.00</p>
                </div>

              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Tess} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Raw Black Tees</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$19.00</p>
                  
                </div>
              </div>
              <div>
                <img  className='bg-neutral-100 p-2 'src={Mockup} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>MOCKUP Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$30.00</p>
                </div>
              </div>
            </div>  
          </div>
          </section>
          {/*TERCEIRA SEÇÃO*/}
          <section>
          <div className='bg-gradient-to-r from-neutral-100 to white w-full  mt-15 flex justify-between font-[Inter]'>
            <div className='ml-34 mt-15'>
              <h1 className='text-neutral-800 font-bold text-[24px]'>Browse Our Fashion Paradise!</h1>
              <p className='text-neutral-600 font-normal tex-[14px] mt-5 w-120' >Step into a world of style and explore our diverse collection of clothing categories.</p>
              <div  className=' border-2 rounded-[6px] mt-8 gap-4 flex bg-neutral-900 w-50 hover:border-neutral-600 hover:bg-neutral-600 justify-center items-center pt-3 pb-3'>
                <button className='font-medium text-[14px] text-neutral-100' >Start Browsing</button>
                <img src={RightArrow} alt="" />
              </div>
            </div>
            <div className='mr-45'>
              <img src={CategoryImage} alt="" />
            </div>
          </div>
        </section>
        {/*QUARTA SEÇÃO*/}
        <div className='  w-308 h-160 mb-15 ml-36 mt-28 font-[Inter]'>
            <div className='text-center items-center'>
              <h2 className='border-1 w-22 ml-145 m-15 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[14px] font-medium text-neutral-900'>On Offer</h2>
            </div>
            <div className='grid grid-cols-4  gap-6 ml-10'>
              <div>
                <img className='bg-neutral-100 p-2' src={Sweetshirts} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Elegant Ebony Sweatshirts</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$35.00</p>
                </div>
              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Sleek} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Sleek and Cozy Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$57.00</p>
                </div>

              </div>
              <div>
                <img className='bg-neutral-100 p-2' src={Tess} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>Raw Black Tees</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$19.00</p>
                  
                </div>
              </div>
              <div>
                <img  className='bg-neutral-100 p-2 'src={Mockup} alt="" />
                <h1 className='font-medium text-neutral-900 mt-6 mb-2'>MOCKUP Black</h1>
                <div className='flex'>
                  <p className='border-1 border-neutral-200 pl-4 pr-3 mr-5  pt-1 pb-1 rounded-2xl text-[12px] font-medium text-neutral-900'>IN STOCK</p>
                  <p className='font-normal text-[14px] text-neutral-600 mt-1'>$30.00</p>
                </div>
              </div>
            </div>  
          </div>
        <Footer />
    </div>
  );
}

export default Home;

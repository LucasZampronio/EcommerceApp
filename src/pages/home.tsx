
import Header from '../components/Header'
import RightArrow from '../Images/Icons/RightArrowWhite.svg'
import Guyimage from '../Images/Hero Image.svg'
import Star from '../Images/Estrela.svg'
import Background from '../Images/Background.svg'
import Footer  from '../components/Footer'
function Home() {
  return (
    <div>
        <Header />
        <section className='bg-neutral-100 w-full h-142'>
          <div className='flex font-[Inter] items-center justify-between  w-full h-142'>
            <div className='ml-37'>
              <h1 className='text-neutral-800 font-bold text-[32px]'>Fresh Arrivals Online</h1>
              <h2 className='text-neutral-600 font-normal tex-[14px] mt-5'>Discover Our Newest Collection Today.</h2>

              <div className=' border-2 rounded-[6px] mt-16 gap-4 flex bg-neutral-900 w-50 hover:border-neutral-600 hover:bg-neutral-600 justify-center items-center pt-2 pb-2'>
                <button className='font-medium text-[14px] text-neutral-100'>View Collection</button>
                <img src={RightArrow} alt="" />
              </div>
            </div>
            <div>
            <div className='grid grid-cols-1 grid-rows-1 h-141  mr-20'>
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 z-10 self-start translate-y-32 -translate-x-22' src={Star} alt="Star" />
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 w-110 h-auto self-end z-0 -translate-x-26 -translate-y-1' src={Background} alt="Background" />
              <img className='col-start-1 col-end-2 row-start-1 row-end-2 w-86 h-auto translate-y-16 z-20' src={Guyimage} alt="Model" />
            </div>
            </div>
          </div>
          <div>

          </div>
        </section>
        <Footer />
    </div>
  );
}

export default Home;

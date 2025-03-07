
import Header from '../components/Header'
import RightArrow from '../Images/Icons/RightArrowWhite.svg'
import Guyimage from '../Images/Hero Image.png'
function Home() {
  return (
    <div>
        <Header />
        <section className='bg-neutral-100 w-full h-140'>
          <div className='flex font-[Inter]'>
            <div>
              <h1 className='text-neutral-800 font-bold text-[32px]'>Fresh Arrivals Online</h1>
              <h2 className='text-neutral-600 font-normal tex-[14px]'>Discover Our Newest Collection Today.</h2>

              <div className=' border-2 rounded-[6px] gap-4 flex bg-neutral-900 w-46 justify-center items-center pt-2 pb-2'>
                <p className='font-medium text-[14px] text-neutral-100'>View Collection</p>
                <img src={RightArrow} alt="" />
              </div>
              <div className='flex'>
                <img src={Guyimage} alt="" />
              </div>
            </div>
            <div>

            </div>
          </div>
          <div>

          </div>
        </section>
    </div>
  );
}

export default Home;

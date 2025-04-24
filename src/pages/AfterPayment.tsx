import Header from '../components/Header'
import Footer  from '../components/Footer'
import RightArrow from '../Images/Chevron Right.svg'
import Payment from '../Images/Frame 11.svg'

function AfterPayment() {
  return (
    <div>
        <Header />
        <section className='bg-green-100 h-35 items-center flex font-[Inter]'>
            <div className='items-center ml-52'>
                <h1 className='mb-2 text-neutral-900 text-[24px] font-bold'>Successful Order</h1>
                <div className='flex'>
                    <p className='text-neutral-500 font-medium'>Ecommerce</p>
                    <img src={RightArrow} alt="" />
                    <p className='text-neutral-900 font-medium'>Successful Order</p>
                </div>
            </div>
        </section>

        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-center max-w-2xl mt-20 mb-20">
            <img src={Payment} alt="" className="mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Thank You for Shopping!</h1>
            <p className="text-neutral-600 text-lg mb-8">
              Your order has been successfully placed and is now being processed.
            </p>
          </div>
        </div>

        <Footer />
    </div>
  );
}

export default AfterPayment;
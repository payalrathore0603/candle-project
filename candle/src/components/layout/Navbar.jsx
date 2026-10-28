
import Header from './Header';hkjh
import Main from './Main';
import Footer from './Footer';
import bgImage from '../../assets/background-image.png'
export default function Navbar() {
  return(
  <div className='mini-h-screen bg-primary  font-sans'>
  
  {/* 1.top Banner/ Hero Section */}
  {/* image conatainer with relative position for overlays */}
  <div className='relative w-full h-[30vh] md:h-[40vh] overflow-hidden'>
    <img 
    src={logo}
    alt=""
    className='w-full h-full object-cover object-center' />

    {/* Optional Semi-Transparent Gradient Overlay for Readability */}
    <div className='absolute inset-0 bg-primary/5'></div>

    {/* Floating Text / Branding Overlay inside Image */}
    <div className='absolute inset-0 flex flex-col  items-center justify-center text-center p-4'>
      <div className='flex items-center w-2xl h-2xl rounded-[50%] justify-center overflow-hidden mx-4 '>
        <img src={logo} alt="logo" className='object-cover object-center'/>
      </div>
      <h2 className='font-serif text-3xl md:text-5xl text-white  drop-shadow-md '>Wick & Bond</h2>
      <p className='font-sans md:text-base text-sm text-white/90 mt-2'>Handcrafted Luxury For Your Space✨️</p>
    </div>
  </div>

  
  <Header/>

  <main className='flex-1 w-full max-w-7xl mx-auto px-4 py-4 '>
     <Main/>
  </main>
 
  <Footer/>
  </div>
  )
}
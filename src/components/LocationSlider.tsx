import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const temples = [
  { 
    name: 'Bankey Bihari Temple', 
    distance: '2-5 km from projects', 
    img: 'https://static.wixstatic.com/media/d61bdf_16fd8552a8814f4285342d35da08cbdd~mv2.jpg/v1/fill/w_980,h_515,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d61bdf_16fd8552a8814f4285342d35da08cbdd~mv2.jpg' 
  },
  { 
    name: 'Prem Mandir', 
    distance: '3-6 km from projects', 
    img: 'https://media.istockphoto.com/id/2171891587/photo/prem-mandir-krishna-temple-vrindavan.jpg?s=612x612&w=0&k=20&c=PsCS__3uA1vgzm9p15WxeQsKcNNBKd7zwoYWik78II4=' 
  },
  { 
    name: 'ISKCON Temple', 
    distance: '2-4 km from projects', 
    img: 'https://static.wixstatic.com/media/d61bdf_41cadd6c9b8947aebfc18b1688142389~mv2.jpg/v1/fill/w_980,h_513,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d61bdf_41cadd6c9b8947aebfc18b1688142389~mv2.jpg'
  },
  { 
    name: 'Chandrodaya Temple', 
    distance: '4-7 km from projects', 
    img: 'https://c.ndtvimg.com/gws/ms/vrindavan-chandrodaya-mandir-worlds-tallest-temple/assets/6.jpeg?1730805562' 
  },
  { 
    name: 'Radha Raman Temple', 
    distance: '3-5 km from projects', 
    img: 'https://assets.indiaonline.in/cg/City-Guide/radha-raman.jpg'
  },
  { 
    name: 'Radha Vallabh Temple', 
    distance: '2-6 km from projects', 
    img: 'https://www.brijwale.com/wp-content/uploads/2021/01/DSC_0047-4.jpg'
  },
  { 
    name: 'Govind Dev Ji Temple', 
    distance: '3-7 km from projects', 
    img: 'https://www.tourmyindia.com/states/uttarpradesh/images/govind-dev-ji-temple-vrindavan.jpg'
  },
  {
    name: 'Madan Mohan Temple', 
    distance: '4-8 km from projects', 
    img: 'https://www.mathuravrindavantourpackages.com/images/temple/slider/radha-madan-mohan-temple-3.webp'
  },
];

export default function LocationSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative px-4 md:px-8 py-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6 md:-ml-8">
          {temples.map((temple, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6 md:pl-8"
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={temple.img} 
                    alt={temple.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-1">{temple.name}</h4>
                    <p className="text-saffron-300 text-sm">{temple.distance}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10 hidden md:block"
        aria-label="Previous slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-6 h-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10 hidden md:block"
        aria-label="Next slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-6 h-6 text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

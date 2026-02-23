import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const temples = [
  { 
    name: 'Bankey Bihari Temple', 
    distance: '2-5 km from projects', 
    img: '/bankey-bihari.png' 
  },
  { 
    name: 'Prem Mandir', 
    distance: '3-6 km from projects', 
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80' 
  },
  { 
    name: 'ISKCON Temple', 
    distance: '2-4 km from projects', 
    img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80' 
  },
  { 
    name: 'Chandrodaya Temple', 
    distance: '4-7 km from projects', 
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80' 
  },
  { 
    name: 'Radha Raman Temple', 
    distance: '3-5 km from projects', 
    img: 'https://images.unsplash.com/photo-1609416917845-e4b0e5cd1e8f?w=800&q=80' 
  },
  { 
    name: 'Radha Vallabh Temple', 
    distance: '2-6 km from projects', 
    img: 'https://images.unsplash.com/photo-1580713675818-9e90b48ea8be?w=800&q=80' 
  },
  { 
    name: 'Govind Dev Ji Temple', 
    distance: '3-7 km from projects', 
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80' 
  },
  { 
    name: 'Madan Mohan Temple', 
    distance: '4-8 km from projects', 
    img: 'https://images.unsplash.com/photo-1609948127000-99653e51b1d6?w=800&q=80' 
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {temples.map((temple, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] min-w-0"
            >
              <div className="card group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden rounded-xl">
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

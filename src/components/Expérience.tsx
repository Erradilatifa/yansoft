import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  stats?: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
  }[];
  backgroundImage?: string;
}

const slides: Slide[] = [
  {
    title: "Agence de développement web",
    subtitle: "Construisons ensemble votre présence digitale",
    buttonText: "Nos services",
    backgroundImage: "https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010148.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    stats: [
      { value: 13, label: "ans d'expérience", prefix: "+", suffix: "" },
      { value: 230, label: "projets réalisés", prefix: "", suffix: "+" },
      { value: 18, label: "Notre Equipe", prefix: "", suffix: "+" }
    ]
  },
  {
    title: "Experts en développement",
    subtitle: "Des solutions sur mesure pour votre entreprise",
    buttonText: "Découvrir",
    backgroundImage: "https://img.freepik.com/premium-photo/portrait-two-businessmen-working-together_488220-25032.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    stats: [
      { value: 24, label: "développeurs experts", prefix: "", suffix: "" },
      { value: 12, label: "technologies maîtrisées", prefix: "", suffix: "+" },
      { value: 100, label: "disponibilité", prefix: "", suffix: "%" }
    ]
  },
  {
    title: "200+ clients satisfaits",
    subtitle: "Rejoignez notre liste de clients satisfaits",
    buttonText: "Témoignages",
    backgroundImage: "https://img.freepik.com/premium-photo/businessman-pushing-smile-button-best-evaluation-customer-satisfaction-concept_50039-2318.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    stats: [
      { value: 200, label: "clients satisfaits", prefix: "", suffix: "+" },
      { value: 15, label: "pays", prefix: "", suffix: "" },
      { value: 4.9, label: "étoiles en moyenne", prefix: "", suffix: "/5" }
    ]
  }
];

interface NumberCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ value, duration = 1000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isDecimal = Number.isFinite(value) && !Number.isInteger(value);

  useEffect(() => {
    let startTime: number | null = null;
    let requestId: number;
    
    const startValue = 0;
    const endValue = value;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentValue = startValue + progress * (endValue - startValue);
      setCount(currentValue);
      
      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    };
    
    requestId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(requestId);
  }, [value, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-white">
      {prefix}{isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </div>
  );
};

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Enhanced animations with GSAP
  useEffect(() => {
    if (!sliderRef.current) return;

    // Initial animation
    const tl = gsap.timeline();
    
    // Animate the current slide content
    const currentSlide = sliderRef.current.querySelector(`.slide-${current}`);
    
    if (currentSlide) {
      const title = currentSlide.querySelector('h1');
      const subtitle = currentSlide.querySelector('p');
      const stats = currentSlide.querySelector('.stats-container');
      const button = currentSlide.querySelector('button');
      
      tl.fromTo(title, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(subtitle, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(stats, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(button, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    }

    // Animate the navigation dots
    gsap.fromTo(
      sliderRef.current.querySelectorAll('.nav-dot'),
      { scale: 0.8, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", stagger: 0.1 }
    );

    return () => {
      tl.kill();
    };
  }, [current]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
      setShouldAnimate(true);
    }, 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
      setShouldAnimate(true);
    }, 800);
  };

  useEffect(() => {
    setShouldAnimate(true);
    const initialTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 2000);

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [shouldAnimate]);

  return (
    <div ref={sliderRef} className="relative w-full h-[700px] md:h-[700px] overflow-hidden opacity-95">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-${index} absolute inset-0 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-800 ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {slide.backgroundImage && (
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-800"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: index === current ? 1 : 0,
              }}
            />
          )}
          
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          // Modifiez la partie du rendu des titres comme suit :
<div className="relative z-20 max-w-6xl mx-auto px-4">
  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
    {slide.title}
  </h1>
  
  <p className="text-lg md:text-2xl lg:text-3xl text-white/80 mb-6 md:mb-10 max-w-3xl mx-auto">
    {slide.subtitle}
  </p>
  
  {slide.stats && (
    <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-12">
      {slide.stats.map((stat, statIndex) => (
        <div key={statIndex} className="flex flex-col items-center">
          {index === current && shouldAnimate ? (
            <NumberCounter 
              value={stat.value} 
              prefix={stat.prefix} 
              suffix={stat.suffix} 
            />
          ) : (
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              {stat.prefix}{stat.value}{stat.suffix}
            </div>
          )}
          <div className="text-sm md:text-md lg:text-lg text-white/70 mt-2 md:mt-3">{stat.label}</div>
        </div>
      ))}
    </div>
  )}
  
  <Button 
    size="lg"
    className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto rounded-full bg-gradient-to-r from-brand-blue to-brand-violet hover:opacity-90"
  >
    {slide.buttonText}
  </Button>
</div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 backdrop-blur-sm transition-colors z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 backdrop-blur-sm transition-colors z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot w-4 h-4 rounded-full transition-colors ${
              index === current ? 'bg-gradient-to-r from-brand-blue to-brand-violet' : 'bg-white/50'
            }`}
            onClick={() => {
              setCurrent(index);
              setShouldAnimate(true);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ImageSwiper.css'; // Import custom CSS for additional styling if needed
import im1 from '../Images/img1.jpeg'
import im2 from '../Images/img2.jpeg'
import im3 from '../Images/img3.jpeg'
import im4 from '../Images/img4.jpeg'
import im5 from '../Images/img5.jpeg'
import im6 from '../Images/home.jpeg'

const ImageSwiper = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const slides = [
        
        
        { src: im6 },
        { src: im1 },
        { type: 'video', videos: [
        'https://www.youtube.com/embed/n-AmsTfTA1s?si=VT9eeF2xK54O-SDb', 
          'https://www.youtube.com/embed/Bc1UJZTcHkc?si=6LWVkbY57mTYtqxi'
        ], image: im3 },
        { src: im2 },
        { src: im4 },
        { src: im5 }
        
      ];
  return (
    <>
   <div className="image-swiper">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-container">
             <img src={slide.type === 'video' ? slide.image : slide.src} alt={`Slide ${index + 1}`} />
            {slide.type === 'video' && (
             <>
             <iframe 
               src={slide.videos[0]} 
               title={`Video ${index + 1}-1`}
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="video-overlay video1"
             />
             <iframe 
               src={slide.videos[1]} 
               title={`Video ${index + 1}-2`}
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="video-overlay video2"
             />
           </>
              
            )}
          </div>
        ))}
      </Slider>
    
      <div className="button-container">
             <button className="buy-button"><b>
              BUY</b></button>
              
             <button className="sell-button">SELL</button>
           </div>
           </div>

        </>
  );
}

export default ImageSwiper;

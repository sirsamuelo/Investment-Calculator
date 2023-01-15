import React, { useState,useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import boat from '../figma/QR/boat.png';
import car from '../figma/QR/car.png';
import field from '../figma/QR/field.png';
import house from '../figma/QR/house.png';
import watch from '../figma/QR/watch.png';
import money from '../figma/QR/money.png';

const ImageSlider = ({ finalAmount}) => {
  const [current, setCurrent] = useState(0);
  const [qr,setQr] = useState([])
  const [baseArr,setLength] = useState(0)

  useEffect(() => {
    var baseArr = [
      {
        image: watch,
      },
      {
        image: field,
      },
      {
        image: boat,
      },
      {
        image: car,
      },
      {
        image: house,
      },
      {
        image: money,
      },
    ];
    setLength(baseArr.length)
  
    function makeSlideImageArr(finalAmount) {
      if(finalAmount < 20000) {
        let new_list = baseArr
        return new_list
      } else if(finalAmount >= 20000 && finalAmount < 40000) {
        let new_list = baseArr.slice(1).concat(baseArr.slice(0,1));
        return new_list
      } else if(finalAmount >= 40000 && finalAmount < 80000) {
        let new_list = baseArr.slice(2).concat(baseArr.slice(0,2));
        return new_list
      } else if(finalAmount >= 80000 && finalAmount < 120000) {
        let new_list = baseArr.slice(3).concat(baseArr.slice(0,3));
        return new_list
      } else if(finalAmount >= 120000 && finalAmount < 200000) {
        let new_list = baseArr.slice(4).concat(baseArr.slice(0,4));
        return new_list
      } else if(finalAmount > 200000) {
        let new_list = baseArr.slice(5).concat(baseArr.slice(0,5));
        return new_list
      }
    }
    setQr(makeSlideImageArr(finalAmount))
  },[finalAmount])

  const nextSlide = () => {
    if(current === 5) {
      setCurrent(0)
    } else {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  };

  const prevSlide = () => {
    if(current === 0){
      setCurrent(5)
    } else {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
  };

  if (!Array.isArray(qr) || baseArr.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {qr && qr.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
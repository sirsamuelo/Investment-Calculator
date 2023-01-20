import React, { useState,useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import car from '../img/QR/car.png';
import field from '../img/QR/field.png';
import house from '../img/QR/house.png';
import watch from '../img/QR/watch.png';
import money from '../img/QR/money.png';
import boat from '../img/QR/boat.png'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


const ImageSlider = ({ finalAmount, startingBalance,duration,expectedReturn,data,monthlyDeposit}) => {
  const [current, setCurrent] = useState(0);
  const [qr,setQr] = useState([])
  const [baseArr,setLength] = useState(0)
  const [item,setItem] = useState('')

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

    function setFinalItem(finalAmount) {
      if(finalAmount < 20000) {
        return 'buy brand new rolex'
      } else if(finalAmount >= 20000 && finalAmount < 40000) {
        return "buy pretty nice piece of land or field near Kosice where you can build your new house"
      } else if(finalAmount >= 40000 && finalAmount < 80000) {
        return 'buy a boat'
      } else if(finalAmount >= 80000 && finalAmount < 120000) {
        return 'buy brand new mercedes'
      } else if(finalAmount >= 120000 && finalAmount < 200000) {
        return 'buy new house'
      } else if(finalAmount > 200000) {
        return 'have a lot of money'
      }
    }
    setItem(setFinalItem(finalAmount))
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
      <div style={{padding: '1rem'}}>
						<Divider sx={{ width: '80%', margin: '0 auto' }}>
							<Chip label='Augmented Reality' color='primary'></Chip>
						</Divider>
						<Typography
							variant='h6'
							gutterBottom
							sx={{ margin: '2rem auto', width: '30%', textAlign: 'center' }}
						>
							Hello my friend, I see you would like to invest{' '}
							<span>{startingBalance}€</span> at the beggining of your journey.
							That`s awsome. Imagine, after <span>{duration}</span> years and
							with your monthly deposit <span>{monthlyDeposit}€</span> and
							expected return <span>{data !== 0 ? data : expectedReturn}%</span>{' '}
							you can {item}. Have a quick look on how it looks like below by scanning QR code.
						</Typography>
					</div>
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
      <Typography variant='h6' sx={{ margin: '2rem auto', width: '40%', textAlign: 'center' }}>
        After scanning QR code, please point your camera on QR code again
      </Typography>
    </section>
  );
};

export default ImageSlider;
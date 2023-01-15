import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import QR from '../figma/qrhouse.png'

const QrSlider = () => {
	var settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div id='carousel'>
		<Slider {...settings} id="carousel" style={{backgroundColor: 'white', width: '20%'}}>
			<div className='child' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<h3 style={{textAlign: 'center'}}>1</h3>
				<img src={QR} alt="QR" />
			</div>
			<div>
				<h3>2</h3>
				<img src={QR} alt="QR" />
			</div>
			<div>
				<h3>3</h3>
				<img src={QR} alt="QR" />
			</div>
		</Slider>
		</div>
	);
};

export default QrSlider;

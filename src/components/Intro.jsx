import React, { useState, useEffect } from 'react';
import Graduate from '../figma/Graduate.png';
import { SlideInRight } from 'react-animated-components';

const Intro = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.pageYOffset);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<SlideInRight durationMs={2500}>
			<div className='container_intro'>
				<img src={Graduate} alt='Graduate' className='GRADUATE' />
				<div>
					<h1>
						This is <span>jacob.</span>He just <span>graduated</span> and
						wonders what comes next. {scrollPosition}
					</h1>
				</div>
			</div>
		</SlideInRight>
	);
};

export default Intro;

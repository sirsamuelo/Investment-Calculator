import React, { Fragment } from 'react';
import Hiro from '../figma/Hiro.png';


export default function Ar() {
	return (
		<Fragment>
			<div className='card_container'>
				<img src={Hiro} alt={'Hero'} loading='lazy' />
			</div>
		</Fragment>
	);
}

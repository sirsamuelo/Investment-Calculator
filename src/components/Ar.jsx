import React, { Fragment } from 'react';
import Hiro from '../figma/Sign.png';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


export default function Ar({data,finalAmount,duration,monthlyDeposit,expectedReturn,startingBalance}) {
	return (
		<Fragment>
			<div className='card_container'>
				<img src={Hiro} alt={'Hero'} loading='lazy' />
			</div>
		</Fragment>
	);
}

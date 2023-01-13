import React, { Fragment } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import QR from '../figma/qrcar.png';
import Hiro from '../figma/Hiro.png';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function Ar({finalAmount,duration,monthlyDeposit,expectedReturn,startingBalance}) {
	return (
		<Fragment>
			<Divider sx={{ width: '80%', margin: '0 auto'}}>
				<Chip label="Augmented Reality" color="primary"></Chip>
			</Divider>
			<Typography variant='h6' gutterBottom sx={{margin: '2rem auto',width: '40%',textAlign: 'center'}}>
				Hello my friend, I see you would like to invest <span>{startingBalance}€</span> at the
				beggining of your journey. That`s awsome. Imagine, after <span>{duration}</span> years
				and with your monthly deposit <span>{monthlyDeposit}€</span> and expected return <span>{expectedReturn}%</span> you can buy lots of things. Lets see what you can buy with your return <span>{finalAmount}€.</span>
			</Typography>
			<div className='card_container'>
				<div className='card'>
					<img
						src={QR}
						alt={'QR'}
						loading='lazy'
						id='qr'
						style={{ margin: '1rem' }}
					/>
				</div>
				<div className='card'>
					<img src={Hiro} alt={'Hero'} loading='lazy' />
				</div>
			</div>
		</Fragment>
	);
}

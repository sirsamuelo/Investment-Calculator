import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Intro = () => {
	$(document).ready(function () {
		var curPage = 1;
		var numOfPages = $('.skw-page').length;
		var animTime = 1000;
		var scrolling = false;
		var pgPrefix = '.skw-page-';

		function pagination() {
			scrolling = true;

			$(pgPrefix + curPage)
				.removeClass('inactive')
				.addClass('active');
			$(pgPrefix + (curPage - 1)).addClass('inactive');
			$(pgPrefix + (curPage + 1)).removeClass('active');

			setTimeout(function () {
				scrolling = false;
			}, animTime);
		}

		function navigateUp() {
			if (curPage === 1) return;
			curPage--;
			pagination();
		}

		function navigateDown() {
			if (curPage === numOfPages) return;
			curPage++;
			pagination();
		}

		$(document).on('mousewheel DOMMouseScroll', function (e) {
			if (scrolling) return;
			if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
				navigateUp();
			} else {
				navigateDown();
			}
		});

		$(document).on('keydown', function (e) {
			if (scrolling) return;
			if (e.which === 38) {
				navigateUp();
			} else if (e.which === 40) {
				navigateDown();
			}
		});
	});

	return (
		<div className='skw-pages'>
			<div className='skw-page skw-page-1 active'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='overlay'></div>
						<div className='skw-page__content'></div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<Typography
								variant='h3'
								gutterBottom
								style={{ textAlign: 'center' }}
							>
								Hello, my name is Jacob and I just graduated.
							</Typography>
							<Typography
								variant='h5'
								gutterBottom
								style={{ textAlign: 'center' }}
							>
								I found nice job wtih good income, I do not know what to do with
								my money! I don´t have any financial education, but one thing I
								know I want to invest them!
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-2'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<Typography
								variant='h3'
								style={{ textAlign: 'center', width: '300px', padding: '1rem' }}
							>
								Why should I invest ?
							</Typography>
							<Typography
								variant='h5'
								gutterBottom
								style={{ textAlign: 'center' }}
							>
								Investing is a way to grow your money over time by putting it
								into assets that have the potential to increase in value. This
								can include stocks, bonds, real estate, and more. Investing can
								help you reach your financial goals, such as saving for
								retirement or buying a house.
							</Typography>
							<Typography
								variant='caption'
								gutterBottom
								style={{ margin: '2rem' }}
							>
								It is important to remember that investing carries risk and past
								performance is not indicative of future results. It is
								recommended that you consult with a financial advisor before
								making any investment decisions. Do not use this web application
								as financial recommendation.
							</Typography>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='overlay'></div>
						<div className='skw-page__content'></div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-3'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='overlay'></div>
						<div className='skw-page__content'></div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content' style={{ textAlign: 'center' }}>
							<Typography
								variant='h4'
								gutterBottom
								sx={{ textTransform: 'upperCase' }}
							>
								Where should I invest ?
							</Typography>
							<Typography variant='h5' gutterBottom>
								1. STOCKS
							</Typography>
							<Typography variant='h6' gutterBottom>
								Investing in stocks, is a way to own a piece of a publicly
								traded company. When you buy a stock, you become a shareholder,
								and your investment can increase in value if the company
								performs well.
							</Typography>
							<Typography variant='h5' gutterBottom>
								2. BONDS
							</Typography>
							<Typography variant='h6' gutterBottom>
								Bonds are a type of debt security issued by companies or
								governments. When you invest in a bond, you're essentially
								lending money to the issuer in exchange for periodic interest
								payments and the return of principal at maturity.
							</Typography>
							<Typography variant='h5' gutterBottom>
								3. REAL ESTATE
							</Typography>
							<Typography variant='h6' gutterBottom>
								Real estate can provide a steady stream of income through rent,
								and the potential for appreciation in value over time.
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-4'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<Typography
								variant='h3'
								style={{ textTransform: 'uppercase', textAlign: 'center' }}
							>
								Show yourself capable in world of finance !
							</Typography>
							<Link
								to='/main'
								style={{ textDecoration: 'none', margin: '2rem' }}
							>
								<Button
									variant='contained'
									type='submit'
									style={{ width: '100%' }}
								>
									Investment Calculator
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='overlay'></div>
						<div className='skw-page__content'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;

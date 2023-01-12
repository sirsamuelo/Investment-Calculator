// import Graduate from '../figma/Graduate.png';
// import Boy from '../figma/Boy.png';
// import Clock from '../figma/Clock.png';
// import Couch from '../figma/Couch.png';
// import Pc from '../figma/Pc.png';
// import Rug from '../figma/Rug.png';
// import Table from '../figma/Table.png';
import qrhouse from '../figma/qrhouse.png'
import { Link } from 'react-router-dom';

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
						<div className='skw-page__content'></div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'>Hello, my name is Jacob and I just graduated.</h2>
							<p className='skw-page__description'>
								I found nice job wtih good income, I do not know what to do with my money!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-2'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'></h2>
							<p className='skw-page__description'>
								I don´t have any financial education, but one thing I know I want to invest them!
							</p>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className="overlay"></div>							
						<div className='skw-page__content'></div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-3'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'></div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'>Why should I invest?</h2>
							<p className='skw-page__description'>
							Investing is a way to grow your money over time by putting it into assets that have the potential to increase in value. 
							This can include stocks, bonds, real estate, and more. Investing can help you reach your financial goals, 
							such as saving for retirement or buying a house.
						
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-4'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'>Where should I invest?</h2>
							<h2 className='h2_heading'>1. STOCKS</h2>
							<p className='skw-page__description'>
							Investing in stocks, is a way to own a piece of a publicly traded company. When you buy a stock, you become a shareholder, and your investment can increase in value if the company performs well.
							</p>
							<h2 className='h2_heading'>2. BONDS</h2>
							<p className='skw-page__description'>
							Bonds are a type of debt security issued by companies or governments. When you invest in a bond, you're essentially lending money to the issuer in exchange for periodic interest payments and the return of principal at maturity.
							</p>
							<h2 className='h2_heading'>3. REAL ESTATE</h2>
							<p className='skw-page__description'>
							Real estate can provide a steady stream of income through rent, and the potential for appreciation in value over time.
							</p>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className="overlay"></div>							
						<div className='skw-page__content'></div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-5'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
						<h2 className='skw-page__heading'>
								Show yourself capable in world of finance !
							</h2>
							<p className='skw-page__description'>
								Feel free to check
								<Link to="/main"><br/>
								<button className='button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick' style={{ marginTop: '20px'}}>
									<span>Investment</span>
									<span>Calculator</span>
								</button>
								</Link>
							</p>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;

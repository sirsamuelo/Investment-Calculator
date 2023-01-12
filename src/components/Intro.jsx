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
							<h2 className='skw-page__heading'>This is Jacob.</h2>
							<p className='skw-page__description'>
								He just finished graduation and wonders what comes next.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-2'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'>Jacob is lost.</h2>
							<p className='skw-page__description'>
								Lets show him some benefits of investing
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
							<h2 className='skw-page__heading'>Page 3</h2>
							<p className='skw-page__description'>
								Tu budu informácie ohladom investovanie ako a prečo investovat
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-4'>
				<div className='skw-page__half skw-page__half--left'>
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
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'></div>
					</div>
				</div>
			</div>
			<div className='skw-page skw-page-5'>
				<div className='skw-page__half skw-page__half--left'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<img 
								className='qrhouse'
								src={qrhouse}
							/>
						</div>
					</div>
				</div>
				<div className='skw-page__half skw-page__half--right'>
					<div className='skw-page__skewed'>
						<div className='skw-page__content'>
							<h2 className='skw-page__heading'>
								Lets see what you can buy in future with your investment
							</h2>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;

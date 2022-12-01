
const Modal = ({pullData}) => {
    pullData('This  is from modal')

	return (
        <div className='modal_overlay'>
            <div className='modal'>
                <h1>Data submitted</h1>
            </div>
        </div>
	);
};

export default Modal;
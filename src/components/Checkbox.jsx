import PropTypes from 'prop-types';

const Checkbox = ({checked,onChange,label,}) => {
	return (
		<label className='question__label'>
			<input type="checkbox"  checked={checked} onChange={onChange} className='checkboxInput'/>
			{label}
		</label>
	);
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.any.isRequired,
	label: PropTypes.string
};

export default Checkbox;
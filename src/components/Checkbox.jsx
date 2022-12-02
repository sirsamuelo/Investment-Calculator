import PropTypes from 'prop-types';

const Checkbox = ({checked,onChange,label,disabled}) => {
	return (
		<label className='question__label'>
			<input type="checkbox"  checked={checked} onChange={onChange} className='checkboxInput' disabled={disabled} />
			{label}
		</label>
	);
};

Checkbox.propTypes = {
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.any.isRequired,
	label: PropTypes.string
};

export default Checkbox;
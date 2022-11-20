import React from 'react'

const Checkbox = ({checked,onChange,label,disabled}) => {
  return (
    <label className='question__label'>
        <input type="checkbox" checked={checked} onChange={onChange} className='checkboxInput' />
        {label}
    </label>
  )
}

export default Checkbox
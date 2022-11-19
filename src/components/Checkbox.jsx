import React from 'react'

const Checkbox = ({value,onChange,label}) => {
  return (
    <label className='question__label'>
        <input type="checkbox" checked={value} onChange={onChange} className='checkboxInput'/>
        {label}
    </label>
  )
}

export default Checkbox
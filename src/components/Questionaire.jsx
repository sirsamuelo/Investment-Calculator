import { useState } from 'react'
import dotaznik from '../sample.js'
import Checkbox from './Checkbox.jsx'

const Questionaire = () => {
    function findLengthOfCheckboxes(dotaznik) {
        let sum = 0;
        dotaznik.map((item,index) => {
            sum = sum + Object.keys(item).length - 1
        })
        return sum
    }
    const sum = findLengthOfCheckboxes(dotaznik)
    const [isChecked, setIsChecked] = useState(
        new Array(sum).fill(false)
      );

  const onChange = (position) => {
    const updateCheckedState = isChecked.map((item,index) => index === position ? !item : item)

    setIsChecked(updateCheckedState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submit')
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='questions'>
            {/* change index somehoow  */}
          {dotaznik.map(({question,a,b,c,d}, index) => {
            return (
              <div key={index} className='question__container'>
                <div className='question'>{question}</div>
                <Checkbox label={a} value={isChecked} onChange={() => onChange(index)}/>
                <Checkbox label={b} value={isChecked} onChange={() => onChange(index)}/>
                {c && <Checkbox label={c} value={isChecked} onChange={() => onChange(index)}/>}
                {d && <Checkbox label={d} value={isChecked} onChange={() => onChange(index)}/>}
              </div>
            )
          })}{' '}
        </div>
        <button className='btn-submit' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}

export default Questionaire

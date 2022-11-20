import { useState } from 'react'
import dotaznik from '../sample.js'
import Checkbox from './Checkbox.jsx'

const Questionaire = () => {
  const [isChecked, setIsChecked] = useState(dotaznik)

  const onChange = (position) => {
    const updateCheckedState = isChecked.map((item, index) => {
      if (position === index) {
        const d = !item.selected
        return { ...item, selected: d }
      } else {
        return { ...item }
      }
    })
    setIsChecked(updateCheckedState)
  }

  const goOver = (index) => {
    for (let i = 0; i < isChecked.length; i++) {
      if (isChecked[index].selected === true) {
        return true
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submit')
  }

  function onClick() {
    const updateCheckedState = isChecked.map((item) => {
      return { ...item, selected: false }
    })

    setIsChecked(updateCheckedState)
  }
  function mojaFunkciakurva(position) {
    isChecked.forEach((item, index) => {
      if (position === index) {
        const boolValueInObject = item.selected
        return boolValueInObject
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='questions'>
          {dotaznik.map((itemInDotaznik, index) => {
            const { a, b, c, d, e, question, selected } = itemInDotaznik
            console.log(selected)
            return (
              <div key={index} className='question__container'>
                <div className='question'>{question}</div>
                <Checkbox
                  label={a}
                  checked={mojaFunkciakurva(index)}
                  onChange={() => onChange(index)}
                  // disabled={goOver(index)}
                />
                <Checkbox
                  label={b}
                  checked={mojaFunkciakurva(index)}
                  onChange={() => onChange(index)}
                  // disabled={goOver(index)}
                />
                {c && (
                  <Checkbox
                    label={c}
                    checked={mojaFunkciakurva(index)}
                    onChange={() => onChange(index)}
                    // disabled={goOver(index)}
                  />
                )}
                {d && (
                  <Checkbox
                    label={d}
                    checked={mojaFunkciakurva(index)}
                    onChange={() => onChange(index)}
                    // disabled={goOver(index)}
                  />
                )}

                {e && (
                  <Checkbox
                    label={e}
                    checked={mojaFunkciakurva(index)}
                    onChange={() => onChange(index)}
                    // disabled={goOver(index)}
                  />
                )}
              </div>
            )
          })}
        </div>
        <button className='btn-submit' type='submit'>
          Save
        </button>
        <button className='btn-clear' type='submit' onClick={onClick}>
          Clear
        </button>
      </form>
    </div>
  )
}

export default Questionaire

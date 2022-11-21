import { useState,useEffect } from 'react'
import dotaznik from '../sample.js'
import Checkbox from './Checkbox.jsx'

const Questionaire = () => {
  const [isChecked, setIsChecked] = useState([])

  useEffect(() => {
    console.log('Effect is called')
    setIsChecked(dotaznik)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submit')
  }

  function myCheckboxFunction(e,id,indexInArray) {
    const checked = e.target.checked
    if (checked) {
      const updateCheckedState = isChecked.map((item,index) => {
        if(indexInArray === index) {
          let poleMoznosti = item.moznosti
          poleMoznosti.forEach(moznost => {
            if(moznost.id === id) {
              console.log(moznost)
              moznost.selected = true
              return moznost.selected
            } 
          })
         }
         return item
      })
      setIsChecked(updateCheckedState)
      console.log(updateCheckedState)
    } else {
      //unchecked
      const updateCheckedState = isChecked.map((item,index) => {
        if(indexInArray === index) {
          let poleMoznosti = item.moznosti
          poleMoznosti.forEach(moznost => {
            if(moznost.id === id) {
              console.log(moznost)
              moznost.selected = false
              return moznost.selected
            } 
          })
         }
         return item
      })
      setIsChecked(updateCheckedState)
      console.log(isChecked)
      console.log('Unchecked')
    }
  }
 function functionToDisable() {

 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='questions'>
          {isChecked && isChecked.map((itemInDotaznik, index) => {
            const { moznosti, question } = itemInDotaznik
            const [a,b,c,d,ee] = moznosti
            return (
              <div key={index} className='question__container'>
                <div className='question'>{question}</div>
                <Checkbox
                  label={a.a}
                  onChange={e => myCheckboxFunction(e,a.id,index)}
                  disabled={functionToDisable()}
                />
                <Checkbox
                  label={b.b}
                  onChange={e => myCheckboxFunction(e,b.id,index)}
                  disabled={functionToDisable()}
                />
                {c && (
                  <Checkbox
                    label={c.c}
                    onChange={e => myCheckboxFunction(e,c.id,index)}
                    disabled={functionToDisable()}
                  />
                )}
                {d && (
                  <Checkbox
                    label={d.d}
                    checked={d.selected}
                    onChange={e => myCheckboxFunction(e,d.id,index)}
                    disabled={functionToDisable()}
                  />
                )}

                {ee && (
                  <Checkbox
                    label={ee.e}
                    checked={ee.selected}
                    onChange={e => myCheckboxFunction(e,ee.id,index)}
                    disabled={functionToDisable()}
                  />
                )}
              </div>
            )
          })}
        </div>
        <button className='btn-submit' type='submit'>
          Save
        </button>
        {/* <button className='btn-clear' type='submit' onClick={onClick}>
          Clear
        </button> */}
      </form>
    </div>
  )
}

export default Questionaire

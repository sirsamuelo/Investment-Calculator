import React, { useState } from 'react'
import MyResponsiveLine from './MyResponsiveLine'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEuroSign,
  faPercent,
  faCalendarDays,
  faClock,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const [startingBalance, setStartingBalance] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [monthlyDeposit, setMonthlyDeposit] = useState(0)
  const [duration, setDuration] = useState(0)
  const [finalAmout,setFinalAmount] = useState(0)
  const [myData, setMyData] = useState([])

  function buildValues(
    labels,
    balances,
    duration,
    startingBalance,
    monthlyReturn,
    monthlyDeposit
  ) {
    for (let i = 0; i <= duration * 12; i++) {
      if (i === 0) {
        balances.push(Number(startingBalance).toFixed(2))
        labels.push(`Year 0`)
      }
      startingBalance = startingBalance * (1 + monthlyReturn) + monthlyDeposit
      if (i % 12 === 0) {
        const year = i / 12
        balances.push(Number(startingBalance).toFixed(2))
        labels.push(`Year ${year}`)
      }
    }
  }

  function convertToObj(a, b) {
    if (a.length !== b.length || a.length === 0 || b.length === 0) {
      return null
    }
    let obj = {}

    // Using the foreach method
    a.forEach((k, i) => {
      obj[k] = b[i]
    })
    return obj
  }

  function populateData(obj) {
    const values = Object.values(obj)
    const keys = Object.keys(obj)
    var data = []
    for (let i = 0; i < values.length; i++) {
      data.push({
        x: keys[i],
        y: values[i],
      })
    }
    return data
  }

  function onSubmit(e) {
    e.preventDefault()

    let balances = []
    let labels = []
    const monthlyReturn = expectedReturn / 100 / 12
    console.log(monthlyReturn)
    buildValues(
      labels,
      balances,
      +duration,
      +startingBalance,
      +monthlyReturn,
      +monthlyDeposit
    )

    //Create object from two arrays
    const objectFromArrays = convertToObj(labels, balances)

    //create desired array from object
    const desiredData = populateData(objectFromArrays)

    var testing = [{ id: 'Revenue', color: 'hsl(50, 30%, 50%)' }]
    testing[0].data = desiredData
    setMyData(testing)
    testing.forEach((item) => {
      console.log(item.data.forEach((record) => console.log(record)))
    })

    const {y} = myData[0].data.pop()
    setFinalAmount(y)

    var container = document.querySelector('.graph__container')
    container.style.display = 'block'
  }

  return (
    <div className='container'>
      <section className='sliders'>
        <h1>Investment Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='startingBalance'>
              <FontAwesomeIcon icon={faEuroSign} /> Starting Balance
            </label>
            <input
              type='text'
              value={startingBalance}
              onChange={(e) => setStartingBalance(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='age'>
              <FontAwesomeIcon icon={faPercent} /> Expected Return %
            </label>
            <input
              type='text'
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='monthlyDeposit'>
              <FontAwesomeIcon icon={faCalendarDays} /> Monthly Deposit
            </label>
            <input
              type='text'
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='age'>
              <FontAwesomeIcon icon={faClock} /> Duration (years)
            </label>
            <input
              type='text'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              name='duration'
            />
          </div>
          <input type='submit' value='Submit' id='submit' />
        </form>
      </section>
      <div className='graph__container'>
        <h2><FontAwesomeIcon icon={faChartSimple} /> Growth Chart</h2>
        <h4>Total value <span className='span'>{finalAmout}€</span> in <span className='span'>{duration} years</span></h4>
        <MyResponsiveLine data={myData} />
      </div>
    </div>
  )
}

export default Main

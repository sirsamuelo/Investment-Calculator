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
import Questionaire from './Questionaire'

const Main = ({ buildValues, convertToObj, populateData }) => {
  const [startingBalance, setStartingBalance] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [monthlyDeposit, setMonthlyDeposit] = useState(0)
  const [duration, setDuration] = useState(0)
  const [finalAmount, setFinalAmount] = useState(0)
  const [myData, setMyData] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    let balances = []
    let labels = []
    const monthlyReturn = expectedReturn / 100 / 12
    buildValues(
      labels,
      balances,
      +duration,
      +startingBalance,
      +monthlyReturn,
      +monthlyDeposit
    )

    //Create object from two arrays of labels and balances
    const objectFromArrays = convertToObj(labels, balances)

    //create desired array from object
    let desiredData = populateData(objectFromArrays)
    var testing = [{ id: 'Revenue', color: 'hsl(50, 30%, 50%)' }]
    testing[0].data = desiredData

    //Without expected return
    testing.push({ id: 'Bez investovanie', color: 'hsl(50, 30%, 50%)' })
    balances = []
    labels = []
    buildValues(
      labels,
      balances,
      +duration,
      +startingBalance,
      undefined,
      +monthlyDeposit
    )
    console.log(balances)
    const newObjectFrom = convertToObj(labels, balances)
    desiredData = populateData(newObjectFrom)
    testing[1].data = desiredData
    setMyData(testing)

    //retrieve final revenue amount from array
    const finalRevenue = testing[0].data.slice(-1)
    setFinalAmount(finalRevenue[0].y)

    //Display graph
    var container = document.querySelector('.graph__container')
    container.style.display = 'block'
  }

  return (
    <div className='container'>
      <Questionaire />
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
        <h2>
          <FontAwesomeIcon icon={faChartSimple} /> Growth Chart
        </h2>
        <h4>
          Total value <span className='span'>{finalAmount}€</span> in{' '}
          <span className='span'>{duration} years</span>
        </h4>
        <MyResponsiveLine data={myData} />
      </div>
    </div>
  )
}

export default Main

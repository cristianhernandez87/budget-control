import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { resetBudget } from "../helpers"

function ControlBudget({budget, setIsValidBudget, setBudget, expends, setExpends }) {

  const [ available, setAvailable ] = useState(0)
  const [ expended, setExpended ] = useState(0)
  const [ porcental, setPorcental] = useState(0)

  useEffect( () => {
    const totalExpended = expends.reduce((total, expend) => expend.amount + total, 0)
    const totalAvailable = budget - totalExpended
    
    const newPorcental = ((budget - totalAvailable) * budget / 100 ).toFixed(2)
    setPorcental(newPorcental)

    setAvailable(totalAvailable)
    setExpended(totalExpended)
  }, [expends])

  const resetApp = e => {
    e.preventDefault();
    setIsValidBudget(false)
    setBudget('')
    setExpends([])
  }

  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-0">
        <CircularProgressbar
          value={porcental}
          text={`${porcental}% Gastado`}
          styles={buildStyles({
            pathColor: porcental > 100 ? 'red' : '#3B82F6',
            textSize: '10px',
          })}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-8 mb-3 mb-md-0">
        <button
          onClick={resetApp}
          className="btn btn-danger w-100 mb-4"
        >Reset APP</button>
        <ul className="list">
          <li className="item"><p><strong>Budget</strong> {resetBudget(budget)}</p></li>
          <li className={`${available < 0 ? 'item alert alert-danger p-2 mb-2' : 'item'}`}><p className={`${available < 0 ? 'mb-0' : ''}`}><strong>Available</strong> {resetBudget(available)}</p></li>
          <li className="item"><p><strong>Expend</strong> {resetBudget(expended)}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default ControlBudget
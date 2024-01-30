import { useEffect, useState } from "react";

function ControlBudget({budget, setIsValidBudget, setBudget, expends}) {

  const [ available, setAvailable ] = useState(0)
  const [ expended, setExpended ] = useState(0)

  useEffect( () => {
    const totalExpended = expends.reduce((total, expend) => expend.amount + total, 0)
    const totalAvailable = budget - totalExpended

    setAvailable(totalAvailable)
    setExpended(totalExpended)
  }, [expends])

  const resetBudget = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD'} )
    // console.log(amount)
  }

  const resetApp = e => {
    e.preventDefault();
    setIsValidBudget(false)
    setBudget('')
}


  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <p>Grafica</p>
      </div>
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <button
          onClick={resetApp}
          className="btn btn-danger w-100 mb-4"
        >Reset APP</button>
        <ul className="list">
          <li className="item"><p><strong>Budget</strong> {resetBudget(budget)}</p></li>
          <li className="item"><p><strong>Available</strong> {resetBudget(available)}</p></li>
          <li className="item"><p><strong>Expend</strong> {resetBudget(expended)}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default ControlBudget
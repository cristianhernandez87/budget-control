import React from 'react'

function ControlBudget({budget}) {

  console.log(budget)
  const resetBudget = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD'} )
    // console.log(amount)
  }


  return (
    <div className="w-100 d-flex flex-wrap">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <p>Grafica</p>
      </div>
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <button className="btn btn-danger w-100 mb-4">Reset APP</button>
        <ul className="list">
          <li className="item"><p><strong>Budget</strong> {resetBudget(budget)}</p></li>
          <li className="item"><p><strong>Available</strong> {resetBudget(0)}</p></li>
          <li className="item"><p><strong>Expend</strong> {resetBudget(0)}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default ControlBudget
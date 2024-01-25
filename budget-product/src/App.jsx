import { useState } from 'react'
import Header from './components/Header'
import FormBudget from './components/FormBudget'
import ControlBudget from './components/ControlBudget'
import Modal from './components/Modal'

function App() {

  const [ budget, setBudget ] = useState(0)
  const [ isValidBudget, setIsValidBudget ] = useState(false)
  const [ modal, setModal ] = useState(false)

  const handleBudgetSubmit = (enteredBudget) => {
    setBudget(enteredBudget);
    setIsValidBudget(true);
  };

  const handdleNewExpend = () => {
    console.log('click modal')
    setModal(true);
  }

  return (
    <>
      <div className="container">
        <div className="row">
            <Header/>
            { isValidBudget && (
              <div className={modal ? "d-none" : "text-center px-5 mb-3"}>
                <button 
                  className={modal ? "btn btn-info d-none" : "btn btn-info"}
                  onClick={handdleNewExpend}  
                >Add Expend</button>
              </div>
            )}

            { modal && <Modal setModal={setModal}/>}
          <hr />
          <div className="col-12 col-lg-6 mx-lg-auto">
              { isValidBudget ? 
                (
                  <ControlBudget budget={budget}/>
                ) : (
                  <FormBudget
                    onBudgetSubmit={handleBudgetSubmit}
                    budget={budget}
                    setBudget={setBudget}
                    isValidBudget={isValidBudget}
                    setIsValidBudget={setIsValidBudget}
                  />
                )
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import Header from './components/Header'
import FormBudget from './components/FormBudget'
import ControlBudget from './components/ControlBudget'
import Modal from './components/Modal'
import ExpendsList from './components/ExpendsList'
import { getId } from './helpers'; 

function App() {

  const [ budget, setBudget ] = useState(0)
  const [ isValidBudget, setIsValidBudget ] = useState(false)
  const [ modal, setModal ] = useState(false)
  const [ expends, setExpends] = useState([])
  const [ expendEdit, setExpendEdit] = useState({})

  const handleBudgetSubmit = (enteredBudget) => {
    setBudget(enteredBudget);
    setIsValidBudget(true);
  };

  const handdleNewExpend = () => {
    setModal(true);
    setExpendEdit({})
  }

  const saveExpend = expend => {
    if(expend.id) {
      const expendUpdated = expends.map( expendState => expendState.id === expend.id ? expend : expendState ) 
      setExpends(expendUpdated)

    } else {
      expend.id = getId()
      expend.date  = Date.now()
      setExpends([...expends, expend])
    }

    setModal(false)
  }

  useEffect(() => {
    if(Object.keys(expendEdit).length > 0) {
      setModal(true);
    }
  },[expendEdit])

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

            { modal && <Modal
                          saveExpend={saveExpend}
                          setModal={setModal}
                          expendEdit={expendEdit}
                      />
                    }
          <hr />
          <div className="col-12 col-lg-6 mx-lg-auto">
              { isValidBudget ? 
                (
                  <>
                    <ControlBudget
                      setIsValidBudget={setIsValidBudget}
                      budget={budget}
                      setBudget={setBudget}
                      expends={expends}
                    />
                    <ExpendsList
                      expends={expends}
                      setExpendEdit={setExpendEdit}
                    />
                  </>
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

import { useState } from "react";
import Message from "./Message";


function FormBudget({
        budget,
        setBudget,
        // isValidBudget,
        onBudgetSubmit,
        setIsValidBudget}) 
    {

    const [ message, setMessage ] = useState('')

    const haddleBudget = (e) => {
        e.preventDefault();
        console.log('llega al form')

        if(!Number(budget) || Number(budget) < 0) {
            setMessage('No available budget, try again.')

            return
        }

        setMessage('')
        setIsValidBudget(true)
        onBudgetSubmit(budget)
    }

    return (
        <form 
            onSubmit={haddleBudget}
            className="w-100">
            
            <div className="form-group">
                <input
                    className="form-control text-center"
                    placeholder="Add budget"
                    type="number"
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))} />
            </div>
            <hr />
            <div className="form-group text-center mb-5">
                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Add"/>
            </div>
            { message && <Message tipo="alert-danger text-center">{message}</Message>}
        </form>
    )
}

export default FormBudget
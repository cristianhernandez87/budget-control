import { useEffect, useState } from "react";
import Message from "./Message"

function Modal({setModal, saveExpend, expendEdit, setExpendEdit }) {

    const [ name, setName ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ id, setId ] = useState('')
    const [ date, setDate ] = useState('')

    const closeModal = e => {
        e.preventDefault();
        setModal(false)
        setName('')
        setAmount('')
        setCategory('')
        setExpendEdit({})
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if ([name,amount,category].includes('')) {
            setMessage('fail')

            setTimeout(() => {
                setMessage('')
            }, 3000)
            return 
        }

        saveExpend ({name, amount, category, id, date})
        setName('')
        setAmount('')
        setCategory('')
    }


    useEffect(() => {
        if(Object.keys(expendEdit).length > 0 ) {
            setName(expendEdit.name)
            setAmount(expendEdit.amount)
            setCategory(expendEdit.category)
            setId(expendEdit.id)
            setDate(expendEdit.date)
            console.log(expendEdit)
        }
    },[])

    return (
        <div className="col-10 col-lg-4 mx-auto p-3 text-center align-content-center d-flex flex-wrap justify-content-between">
            {expendEdit.name ? (<p className="display-4 mb-0">Edit</p>) : (<p className="display-4 mb-0">New</p>)}
            <button
                className="btn btn-danger mb-3"
                onClick={closeModal}
            >X</button>
            <div className="alert alert-primary col-12">
                <form
                    onSubmit={handleSubmit}
                >
                    { message && <Message tipo="alert-danger text-center p-1">{message}</Message>}
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="d-block mb-2 w-100">Name expense</label>
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Add name for expense"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="amount" className="d-block mb-2 w-100">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            className="form-control"
                            placeholder="amount"
                            value={amount}
                            onChange={e => setAmount(Number(e.target.value))}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="category" className="d-block mb-2 w-100">Category</label>
                        <select
                            id="category"
                            className="form-control"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="select">Select</option>
                            <option value="save">Save</option>
                            <option value="car">Car</option>
                            <option value="cool">Cool</option>
                        </select>
                    </div>
                    <div className="form-group text-center">
                        <input
                            id="submit"
                            type="submit"
                            className="form-control btn btn-warning"
                            value={expendEdit.name ? 'Edit' : 'Add new'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
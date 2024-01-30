import { getDate  } from '../helpers'

function Expend({expend}) {
    const { name, amount, category, id, fecha}  = expend

    console.log(category)
    return (
        <div className="card p-3 mb-3 w-100">
            <p className="mb-0"><strong>Name:</strong> {name}</p>
            <p className="mb-0"><strong>Amount:</strong> ${amount}</p>
            <p className="mb-0"><strong>Category:</strong> {category}</p>
            <p className="mb-0"><strong>Date:</strong> {getDate(fecha)}</p>
        </div>
    )
}

export default Expend
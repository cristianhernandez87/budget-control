import {
    LeadingActions,
    SwipeableList, 
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { getDate  } from '../helpers'

function Expend({expend}) {
    const { name, amount, category, id, fecha}  = expend

    const leadindActions = () => {
        console.log('iz')
    }

    const trailActions = () => {
        console.log('der')
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadindActions={leadindActions}
                trailActions={trailActions}
            >
                <div className="card p-3 mb-3 w-100">
                    <p className="mb-0"><strong>Name:</strong> {name}</p>
                    <p className="mb-0"><strong>Amount:</strong> ${amount}</p>
                    <p className="mb-0"><strong>Category:</strong> {category}</p>
                    <p className="mb-0"><strong>Date:</strong> {getDate(fecha)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expend
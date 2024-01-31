import {
    LeadingActions,
    SwipeableList, 
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { getDate  } from '../helpers'

function Expend({expend, setExpendEdit}) {

    const { name, amount, category, id, date}  = expend

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => (setExpendEdit(expend))}
            >
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => (console.log('edit'))}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="card p-3 mb-3 w-100">
                    <p className="mb-0"><strong>Name:</strong> {name}</p>
                    <p className="mb-0"><strong>Amount:</strong> ${amount}</p>
                    <p className="mb-0"><strong>Category:</strong> {category}</p>
                    <p className="mb-0"><strong>Date:</strong> {getDate(date)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expend
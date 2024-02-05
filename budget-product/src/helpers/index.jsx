// helpers

// set ID Random
export const getId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
}

// format to date
export const getDate = date => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return newDate.toLocaleString('en-US', options)
}

// format to number to USD
export const resetBudget = amount => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD'} )
}

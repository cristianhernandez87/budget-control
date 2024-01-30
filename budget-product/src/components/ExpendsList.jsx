import Expend from "./Expend"

function ExpendsList({expends}) {
  return (
    <div className="W-100 mb-34">
        <p className="text-center">{ expends.length ? 'Gastos' :  'No gastos'}</p>
        {expends.map(expend => (
            <Expend
                key={expend.id}
                expend={expend}
            />
        ))}
    </div>
  )
}

export default ExpendsList
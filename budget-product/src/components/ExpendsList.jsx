import Expend from "./Expend"

function ExpendsList({expends}) {
  return (
    <div className="col-12 col-md-6 mb-3 mx-auto">
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
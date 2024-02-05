import Expend from "./Expend"

function ExpendsList({expends, setExpendEdit, deleteExpend}) {
  return (
    <div className="W-100 mb-34">
        <p className="text-center">{ expends.length ? 'Gastos' :  'No gastos'}</p>
        {expends.map(expend => (
            <Expend
                key={expend.id}
                expend={expend}
                setExpendEdit={setExpendEdit}
                deleteExpend={deleteExpend}
            />
        ))}
    </div>
  )
}

export default ExpendsList
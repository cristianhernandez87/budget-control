import Expend from "./Expend"

function ExpendsList({
    expends,
    setExpendEdit,
    deleteExpend,
    setExpendsFilters,
    filters,
    expendsFilter
  }) {
  return (
    <div className="col-12 col-lg-8 ms-lg-auto mt-lg-3 card p-3">
        { filters ? (
          <>
            <p className="text-center">{ expendsFilter.length ? 'Gastos' :  'No gastos en esta categoria'}</p>
            {expendsFilter.map(expend => (
                <Expend
                    key={expend.id}
                    expend={expend}
                    setExpendEdit={setExpendEdit}
                    deleteExpend={deleteExpend}
                />
            ))}
          </>
        ) : (
          <>
            <p className="text-center">{ expends.length ? 'Gastos' :  'No gastos'}</p>
            {expends.map(expend => (
                <Expend
                    key={expend.id}
                    expend={expend}
                    setExpendEdit={setExpendEdit}
                    deleteExpend={deleteExpend}
                />
            ))}
          </>
        )
      }

    </div>
  )
} 

export default ExpendsList
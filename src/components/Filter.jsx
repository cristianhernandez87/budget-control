import { useEffect, useState } from "react"

function Filter({filters, setFilters}) {
  return (
    <div className="col-12 col-lg-8 ms-lg-auto mt-lg-3 card p-3 mb-3">
        <div className="form-group d-flex flex-wrap align-items-center align-content-center">
            <label htmlFor="filter" className="me-3">Filter</label>
            <select
                id="filter"
                className="form-control col"
                value={filters}
                onChange={e => setFilters(e.target.value)}
            >
                <option value="">Select</option>
                <option value="save">Save</option>
                <option value="car">Car</option>
                <option value="cool">Cool</option>
            </select>
        </div>
    </div>
  )
}

export default Filter
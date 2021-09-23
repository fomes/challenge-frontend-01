import React from 'react'

export default function TableUnits(props) {
  return (
    <div>
      <table className="table table-bordered table-success table-striped table-users table-units">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CompanyID</th>
          </tr>
        </thead>
        <tbody>
          {
            props.units.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.companyId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

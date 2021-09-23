import React from 'react'

export default function TableUsers(props) {
  return (
    <div>
      <table className="table table-bordered table-success table-striped table-users">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>UnitID</th>
            <th>CompanyID</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.unitId}</td>
                <td>{e.companyId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

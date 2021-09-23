import React from 'react'

export default function TableCompanies(props) {
  return (
    <div>
      <table className="table table-bordered table-success table-striped table-users table-comp">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {
            props.companies.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

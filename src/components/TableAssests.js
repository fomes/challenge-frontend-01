import React from 'react'

export default function TableAssests(props) {
  return (
    <div>
      <table className="table table-bordered table-success table-striped table-users table-assets">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Status</th>
            <th>HealthScore</th>
            <th>UnitID</th>
            <th>CompanyID</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {
            props.assets.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.model}</td>
                <td>{e.status}</td>
                <td>{e.healthscore}</td>
                <td>{e.unitId}</td>
                <td>{e.companyId}</td>
                <td><img src={e.image} alt="imageAsset" /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

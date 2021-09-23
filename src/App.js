import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableUsers from './components/TableUsers';
import TableCompanies from './components/TableCompanies';
import TableUnits from './components/TableUnits';
import TableAssets from './components/TableAssests';
import Header from './components/Header';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function App() {
  const [users, setUsers] = useState([]);
  const [units, setUnits] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [assets, setAssets] = useState([]);

  const options = {
    title: {
      text: "Assets Info"
    },
    series: [
      {
        data: [70, 73, 90, 88, 60, 91]
      },
    ]
  };

  const fetchApi = () => {
    const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api/';

    const usersUrl = axios.get(baseUrl+'users');
    const unitsUrl = axios.get(baseUrl+'units');
    const companiesUrl = axios.get(baseUrl+'companies');
    const assetsUrl = axios.get(baseUrl+'assets');

    axios.all([usersUrl, unitsUrl, companiesUrl, assetsUrl]).then(
      axios.spread((...data) => {
        setUsers(data[0].data)
        setUnits(data[1].data);
        setCompanies(data[2].data);
        setAssets(data[3].data);
      })
    )
  }

  useEffect(() => {
    fetchApi();
  });

  return (
    <div className="App">
      <Header />

      <div className="my-container">
        <TableUsers users={users} />
        <TableUnits units={units} />
        <TableCompanies companies={companies} />
      </div>

      <TableAssets assets={assets} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;

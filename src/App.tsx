import { FC } from 'react';
import { Header } from './components/Header';
import './App.css';
import Infobox from './components/Infobox';
import Map from './components/Map';
import { IInfoBox } from './interfaces/Infobox';
import CasesByCountry from './components/CasesByCountry';

const App: FC = () => {
  const cases: IInfoBox = {title: "Cases", todayCases: 12000, total: 32424324};
  const recovered: IInfoBox = {title: "Recovered", todayCases: 15000, total: 64564654};
  const deaths: IInfoBox = {title: "Deaths", todayCases: 15000, total: 234234};

  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
              <Infobox {...cases}/>
              <Infobox {...recovered}/>
              <Infobox {...deaths}/>
        </div>
        <Map />
      </div>
      <div className="app__right">
        <CasesByCountry />
      </div>
     
    </div>
  );
}

export default App;

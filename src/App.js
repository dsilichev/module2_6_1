import { Routes, Route, Link } from 'react-router-dom';
import styles from './app.module.css';


function App() {
  const MainPage = () => <div>Контент главной страницы</div>
  const Catalog = () => <div>Контент каталога</div>
  const Contacts = () => <div>Контент контактов</div>

  return (
    <div className={styles.app}>

      <div>
        <h1>Routes</h1>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/catalog'>Catalog</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import styles from './app.module.css';
import { Header, UserBlock} from './components'
import { AppContext } from './context';

const getUserFromServer = () => ({
  id: '1',
  name: 'John',
  age: 18,
  email: 'exmpl@gmail.com',
  phone: '+7000000000'
});

function App() {
  const userData = getUserFromServer();

  return (
    <AppContext.Provider value={userData}>
    <div className={styles.app}>
      <Header />
      <hr/>
      <UserBlock />
    </div>
    </AppContext.Provider>
  );
}

export default App;

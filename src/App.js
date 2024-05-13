import styles from './app.module.css';
import { Header, UserBlock} from './components'
import { AppContextProvider } from './app-context-provider';

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
    <AppContextProvider userValue={userData}>
    <div className={styles.app}>
      <Header />
      <hr/>
      <UserBlock />
    </div>
    </AppContextProvider>
  );
}

export default App;

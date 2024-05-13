import styles from './app.module.css';
import { Header, UserBlock } from './components'
import { AppContextProvider } from './app-context-provider';
import { useEffect, useState } from 'react';

const getUserFromServer = () => ({
  id: '1',
  name: 'John',
  age: 18,
  email: 'exmpl@gmail.com',
  phone: '+7000000000'
});

const getAnotherUserFromServer = () => ({
  id: '2',
  name: 'Sam',
  age: 28,
  email: 'exmpl@gmail.com',
  phone: '+7000000000'
});

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userData = getUserFromServer();

    setUserData(userData);
  },[])
  
  const changeUser = () => {
    const newUserData = getAnotherUserFromServer();

    setUserData(newUserData);
  }

  return (
    <AppContextProvider userValue={userData}>
      <div className={styles.app}>
        <Header />
        <hr />
        <UserBlock />
        <button onClick={changeUser}>Сменить пользователя</button>
      </div>
    </AppContextProvider>
  );
}

export default App;

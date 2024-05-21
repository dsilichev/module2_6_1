import styles from './app.module.css';
import { Header, UserBlock } from './components'
//import { AppContextProvider } from './app-context-provider';
import { useEffect } from 'react';
//import { AppContext } from './context';
import { store } from './store';

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
  //const [userData, dispatch] = useReducer(reducer, {});



  // const dispatch = (action) => {
  //   const newState = reducer(userData, action);

  //   setUserData(newState);
  // }

  useEffect(() => {
    const userData = getUserFromServer();

    store.dispatch({ type: 'SET_USER_DATA', payload: userData });
  }, [])

  const changeUser = () => {
    const newUserData = getAnotherUserFromServer();

    store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
  }

  return (

    <div className={styles.app}>
      <Header />
      <hr />
      <UserBlock />
      <button onClick={changeUser}>Сменить пользователя</button>
    </div>

  );
}

export default App;

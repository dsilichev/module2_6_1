import styles from './app.module.css';
import { Header, UserBlock } from './components'
import { AppContextProvider } from './app-context-provider';
import { useEffect, useReducer, useState } from 'react';
import { AppContext } from './context';

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

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER_DATA': {
      return payload;
    }
    case 'SET_USER_AGE': {
      return ({
        ...state,
        age: payload
      })
    }
    default: return state;
  }
};

function App() {
  const [userData, dispatch] = useReducer(reducer, {});



  // const dispatch = (action) => {
  //   const newState = reducer(userData, action);

  //   setUserData(newState);
  // }

  useEffect(() => {
    const userData = getUserFromServer();

    dispatch({type: 'SET_USER_DATA', payload: userData});
  },[])
  
  const changeUser = () => {
    const newUserData = getAnotherUserFromServer();

    dispatch({type: 'SET_USER_DATA', payload: newUserData});
  }

  return (
    <AppContext.Provider value={{userData, dispatch}}>
      <div className={styles.app}>
        <Header />
        <hr />
        <UserBlock />
        <button onClick={changeUser}>Сменить пользователя</button>
      </div>
    </AppContext.Provider>
  );
}

export default App;

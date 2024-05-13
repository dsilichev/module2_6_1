import styles from './app.module.css';
import { Header, UserBlock} from './components'

const getUserFromServer = () => ({
  id: '1',
  name: 'John',
  age: 18,
  email: 'exmpl@gmail.com',
  phone: '+7000000000'
});

function App() {
  const {name, age, email, phone} = getUserFromServer();

  return (
    <div className={styles.app}>
      <Header name={name}/>
      <hr/>
      <UserBlock name={name} age={age} email={email} phone={phone}/>
    </div>
  );
}

export default App;

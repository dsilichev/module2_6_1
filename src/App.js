import styles from './app.module.css';
import { User } from './components';
import { ControlPanel } from './components';


function App() {

  return (

    <div className={styles.app}>
      <User/>
      <ControlPanel/>
    </div>

  );
}

export default App;

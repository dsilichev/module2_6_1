import { Component, useEffect, useState } from 'react';
import styles from './app.module.css';

export const HelloMessage = ({ user }) => {
  return <span>Привет, {user}</span>;
};

export const GoodByeMessage = ({ user }) => {
  return <span>До свидания, {user}</span>;
};

// Render Props
export const UserWidget = ( { render }) => {
  const user = 'Vasya';
  return (
    <div>
      <div>Текущий пользователь: {user}</div>
      <div>Сообщение:</div>
      {render(user)}
      {/* <HelloMessage user={user} />
      <GoodByeMessage user={user} /> */}
    </div>
  );
};

function App({ message }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(message);

    const updateScreenWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', updateScreenWidth);

    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  return (
    <div className={styles.app}>
      <UserWidget render={(user) => <HelloMessage user={user}/>} />
      <UserWidget render={(user) => <GoodByeMessage user={user}/>} />
      <div>
        {message}: {screenWidth}
      </div>
    </div>
  );
}

export default App;

export class OldApp extends Component {
  // state = 0; как вариант объявить состояние здесь
  constructor(props) {
    super(props);

    // console.log(props.message);  агалог useLayoutEffect

    this.state = {
      screenWidth: window.innerWidth,
    };

    //this.updateScreenWidth = this.updateScreenWidth.bind(this); привязать контекст
  }

  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    console.log(this.props.message);

    window.addEventListener('resize', this.updateScreenWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
  }

  render() {
    return (
      <div className={styles.app}>
        {this.props.message}: {this.state.screenWidth}
      </div>
    );
  }
}

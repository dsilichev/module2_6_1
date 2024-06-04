import { Component, useEffect, useState } from 'react';
import styles from './app.module.css';

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
    this.setState({ screenWidth: window.innerWidth});
  }

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
    )
  }
}

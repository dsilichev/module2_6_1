import { memo, useMemo, useCallback, useState } from 'react';
import styles from './app.module.css';
import { User } from './components';
import { ControlPanel } from './components';

export const Field = memo(({ name, label, value, onChange }) => {
  console.log(name);
  return (
    <label>
      <span>{label}: </span>
      <input type="number" name={name} value={value} onChange={onChange} />
    </label>
  );
});

function App() {
  console.log('-------------------App------------------');
  const [num, setNum] = useState(0);
  const [degree, setDegree] = useState(0);

  const onNumChange = useCallback(({ target }) => {
    setNum(Number(target.value));
  }, []);

  const onDegreeChange = useCallback(({ target }) => {
    setDegree(Number(target.value));
  }, []);

  const hardCalcNum = useMemo(
    () => new Array(20000000).fill(0).reduce((res, el) => res + el, num),
    [num],
  );

  const result = Math.pow(hardCalcNum, degree);

  return (
    <div className={styles.app}>
      <div>
        {num} в степени {degree} = {result}
      </div>
      <Field name="num" label="Число:" value={num} onChange={onNumChange} />
      <Field name="degree" label="Степень:" value={degree} onChange={onDegreeChange} />
      {/* <User />
      <ControlPanel /> */}
    </div>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { RESET_AGE, increaseAge } from '../../actions';

export const ControlPanel = () => {
  const dispatch = useDispatch();

  const onAgeIncrease = () => {
    dispatch(increaseAge(3));
  }

  const onAgeReset = () => {
    dispatch(RESET_AGE);
  }

  return (
    <div>
      <button onClick={onAgeIncrease}>Increase age</button>
      <button onClick={onAgeReset}>Reset age</button>
    </div>
  )
}

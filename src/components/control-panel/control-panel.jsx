import { connect, useDispatch } from "react-redux";
import { RESET_AGE, increaseAge, changeUserAsync } from '../../actions';

export const ControlPanelContainer = ({ onAgeIncrease, onAgeReset, onUserChange }) => {
  // const dispatch = useDispatch();

  // const onAgeIncrease = () => {
  //   dispatch(increaseAge(3));
  // }

  // const onAgeReset = () => {
  //   dispatch(RESET_AGE);
  // }

  // const onUserChange = () => {
  //   dispatch(changeUserAsync);
  // }

  return (
    <div>
      <button onClick={onAgeIncrease}>Increase age</button>
      <button onClick={onAgeReset}>Reset age</button>
      <button onClick={onUserChange}>Change user</button>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  onAgeIncrease: () => dispatch(increaseAge(3)),
  onAgeReset: () => dispatch(RESET_AGE),
  onUserChange: () => dispatch(changeUserAsync),
})

export const ControlPanel = connect(null, mapDispatchToProps)(ControlPanelContainer);

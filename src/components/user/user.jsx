import { connect, useSelector } from "react-redux";
import { selectName, selectAge } from '../../selectors';

export const UserContainer = ({ name, age }) => {
  // const name = useSelector(selectName);
  // const age = useSelector(selectAge);

  return (
    <div>
      <div>User</div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  name: state.userState.name,
  age: state.userState.age,
})

export const User = connect(mapStateToProps)(UserContainer);

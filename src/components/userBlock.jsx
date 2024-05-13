import { UserPersonalInfo, UserContacts } from '../components';

export const UserBlock = ({ name, age, email, phone }) => {
  return (
    <div>
      <div>Пользователь</div>
      <UserPersonalInfo name={name} age={age} />
      <UserContacts email={email} phone={phone} />
    </div>
  )
}

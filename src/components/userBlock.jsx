import { UserPersonalInfo, UserContacts } from '../components';

export const UserBlock = () => {
  return (
    <div>
      <div>Пользователь</div>
      <UserPersonalInfo />
      <UserContacts />
    </div>
  )
}

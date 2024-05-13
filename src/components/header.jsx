import { CurrentUser } from '../components';

export const Header = ({ name }) => {
  return (
    <div>
      <div>Инфо в шапке приложения</div>
      <CurrentUser currentUser={name} />
    </div>
  )
}

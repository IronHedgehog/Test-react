import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <Route {...routeProps}>{isLoggedIn && children}</Route>;
}

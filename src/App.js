import { useEffect } from 'react';
import './App.css';

import LoginPage from './views/login';
import RegistrationPage from './views/registration';
import { Switch } from 'react-router-dom';
import Header from './components/header/header';
import { refreshedUser } from './redux/auth/auth-operation';
import {
  getIsFetchingCurrent,
  getIsLoggedIn,
} from './redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/CustomRoutes/private';
import PublicRoute from './components/CustomRoutes/public';
import ShopPage from './views/shop';
import CartPage from './views/cart';
import OrderOk from './views/OrderOk';

const App = () => {
  const dispatch = useDispatch();
  const loadingCurrentUser = useSelector(getIsFetchingCurrent);

  const loggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(refreshedUser());
  }, [dispatch]);

  return (
    <>
      {loadingCurrentUser ? (
        <h1> Загрузка</h1>
      ) : (
        <>
          {loggedIn && <Header />}
          <Switch>
            <PublicRoute path="/" redirectTo="/shop" exact restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/registration" redirectTo="/shop" restricted>
              <RegistrationPage />
            </PublicRoute>

            <PrivateRoute path="/shop">
              <ShopPage />
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <CartPage />
            </PrivateRoute>
            <PrivateRoute path="/OrderOk">
              <OrderOk />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
};

export default App;

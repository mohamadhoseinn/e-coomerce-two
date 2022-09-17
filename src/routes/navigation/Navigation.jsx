import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CrownLogo } from "../../assets/CrownLogo.svg";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { selectCurrentuser } from "../../store/user/user-selector";

import {
  NavigationCintainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavigationStyle";
import { selectIsCartOpen } from "../../store/cart/cart-selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentuser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationCintainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationCintainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

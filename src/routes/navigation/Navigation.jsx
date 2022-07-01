import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/CrownLogo.svg";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import {
  NavigationCintainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavigationStyle";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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

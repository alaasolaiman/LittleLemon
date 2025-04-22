import logo from "../../images/logo.svg";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={logo} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;

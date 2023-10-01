import "./Header.css";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <p>my travel journal.</p>
    </header>
  );
}

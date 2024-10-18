import logo from "/assets/images/logo/logo.svg";

export default function Logo() {
  return (
    <a href="index.html" className="navbar-logo block w-60 max-w-full px-4">
      <img src={logo} alt="logo" className="header-logo h-12" />
    </a>
  );
}

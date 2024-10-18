import logo from "/assets/images/logo/logo.svg";

export default function FooterLogo() {
  return (
    <a href="javascript:void(0)" className="mb-6 inline-block  max-h-[100px]">
      <img src={logo} alt="logo" className="max-w-full" />
    </a>
  );
}

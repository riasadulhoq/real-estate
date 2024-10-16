import Button from "../Button/Button";
import Navlink from "./Navlink/Navlink";

export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img
                src="/assets/images/logo/logo.svg"
                alt="logo"
                className="header-logo h-12"
              />
            </a>

            <ul className="hidden lg:flex ">
              <Navlink link={"#home"} name={"Home"}></Navlink>
              <Navlink
                link={"#about"}
                name={"About"}
                propsClassName={"xl:ml-10"}
              ></Navlink>
              <Navlink
                link={"#pricing"}
                name={"Pricing"}
                propsClassName={"xl:ml-10"}
              ></Navlink>
              <Navlink
                link={"blog-grids.html"}
                name={"Blog"}
                propsClassName={"xl:ml-10"}
              ></Navlink>
            </ul>

            <div className="sm:flex">
              <Button
                link={"signin.html"}
                name={"Sign In"}
                propsClassName={
                  "flex-1 loginBtn px-[22px] py-2 text-white hover:opacity-70"
                }
              ></Button>

              <Button
                link={"signup.html"}
                name={"Sign Up"}
                propsClassName={
                  "signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                }
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

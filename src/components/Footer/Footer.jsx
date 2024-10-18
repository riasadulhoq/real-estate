import FooterFacebook from "../SVG/Footer/FooterSocial/FooterFacebook";
import FooterInstagram from "../SVG/Footer/FooterSocial/FooterInstagram";
import FooterLinkedIn from "../SVG/Footer/FooterSocial/FooterLinkedIn";
import FooterTwitter from "../SVG/Footer/FooterSocial/FooterTwitter";
import FooterHeading from "./FooterHeading/FooterHeading";
import FooterLink from "./FooterLink/FooterLink";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterSocial from "./FooterSocial/FooterSocial";

export default function Footer() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <FooterLogo></FooterLogo>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <FooterSocial>
                  <FooterFacebook></FooterFacebook>
                </FooterSocial>
                <FooterSocial>
                  <FooterTwitter></FooterTwitter>
                </FooterSocial>
                <FooterSocial>
                  <FooterInstagram></FooterInstagram>
                </FooterSocial>
                <FooterSocial>
                  <FooterLinkedIn></FooterLinkedIn>
                </FooterSocial>
              </div>
            </div>
          </div>

          <FooterHeading headingTitle={"About Us"}>
            <FooterLink linkName={"Home"}></FooterLink>
            <FooterLink linkName={"Features"}></FooterLink>
            <FooterLink linkName={"About"}></FooterLink>
          </FooterHeading>

          <FooterHeading headingTitle={"Features"}>
            <FooterLink linkName={"How it works"}></FooterLink>
            <FooterLink linkName={"Privacy policy"}></FooterLink>
            <FooterLink linkName={"Terms of Service"}></FooterLink>
            <FooterLink linkName={"Refund policy"}></FooterLink>
          </FooterHeading>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                <a
                  href="blog-details.html"
                  className="group flex items-center gap-[22px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-01.jpg"
                      alt="blog"
                    />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    I think really important to design with...
                  </span>
                </a>
                <a
                  href="blog-details.html"
                  className="group flex items-center gap-[22px]"
                >
                  <div className="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-02.jpg"
                      alt="blog"
                    />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    Recognizing the need is the primary...
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

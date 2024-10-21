import LocationIcon from "../SVG/Contact/LocationIcon";
import MailIcon from "../SVG/Contact/MailIcon";
import ContactDetails from "./ContactDetails/ContactDetails";
import Form from "./Form/Form";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let&apos;s talk about your problem.
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <LocationIcon></LocationIcon>
                  </div>
                  <ContactDetails
                    title={"Our Location"}
                    details={
                      "401 Broadway, 24th Floor, Orchard Cloud View, London"
                    }
                  ></ContactDetails>
                </div>

                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <MailIcon></MailIcon>
                  </div>
                  <div>
                    <ContactDetails
                      title={"How Can We Help?"}
                      details={"info@yourdomain.com"}
                    >
                      <p className="mt-1 text-base text-body-color dark:text-dark-6">
                        contact@yourdomain.com
                      </p>
                    </ContactDetails>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form></Form>
        </div>
      </div>
    </section>
  );
}

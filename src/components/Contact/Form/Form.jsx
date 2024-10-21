import FormButton from "./FormButton/FormButton";
import FormStructure from "./FormStructure/FormStructure";

export default function Form() {
  return (
    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
          Send us a Message
        </h3>
        <form>
          <FormStructure
            labelFor={"fullName"}
            labelName={"Full Name*"}
            inputType={"text"}
            inputName={"fullName"}
            placeholder={"Adam Gelius"}
          ></FormStructure>

          <FormStructure
            labelFor={"email"}
            labelName={"Email*"}
            inputType={"email"}
            inputName={"email"}
            placeholder={"example@yourmail.com"}
          ></FormStructure>

          <FormStructure
            labelFor={"phone"}
            labelName={"Phone*"}
            inputType={"text"}
            inputName={"phone"}
            placeholder={"+885 1254 5211 552"}
          ></FormStructure>

          <FormStructure
            propsClassName={"mb-[35px]"}
            labelFor={"message"}
            labelName={"Message*"}
            inputName={"message"}
            rows={"1"}
            placeholder={"type your message here"}
          ></FormStructure>

          <div className="mb-0">
            <FormButton></FormButton>
          </div>
        </form>
      </div>
    </div>
  );
}

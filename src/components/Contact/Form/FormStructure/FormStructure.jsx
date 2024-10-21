/* eslint-disable react/prop-types */
export default function FormStructure({
  propsClassName,
  labelFor,
  labelName,
  inputType,
  inputName,
  placeholder,
}) {
  return (
    <div className={`${propsClassName} || mb-[22px]`}>
      <label
        htmlFor={labelFor}
        className="mb-4 block text-sm text-body-color dark:text-dark-6"
      >
        {labelName}
      </label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
}

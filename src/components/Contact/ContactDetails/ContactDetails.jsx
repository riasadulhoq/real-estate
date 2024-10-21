/* eslint-disable react/prop-types */
export default function ContactDetails({ title, details, children }) {
  return (
    <div>
      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
        {title}
      </h5>

      <p className="text-base text-body-color dark:text-dark-6">{details}</p>
      {children}
    </div>
  );
}

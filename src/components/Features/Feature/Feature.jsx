/* eslint-disable react/prop-types */
export default function Feature({ title, description }) {
  return (
    <>
      <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
        {title}
      </h4>
      <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
        {description}
      </p>
      <a
        href="javascript:void(0)"
        className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Learn More
      </a>
    </>
  );
}

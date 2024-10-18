/* eslint-disable react/prop-types */
export default function FooterHeading({ headingTitle, children }) {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">
          {headingTitle}
        </h4>
        <ul>{children}</ul>
      </div>
    </div>
  );
}

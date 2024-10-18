/* eslint-disable react/prop-types */
export default function FooterLink({ linkName }) {
  return (
    <li>
      <a
        href="javascript:void(0)"
        className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
      >
        {linkName}
      </a>
    </li>
  );
}

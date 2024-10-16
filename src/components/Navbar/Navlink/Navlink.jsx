/* eslint-disable react/prop-types */
export default function Navlink({ link, name, propsClassName }) {
  return (
    <li className="group relative">
      <a
        href={link}
        className={`${propsClassName} ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70`}
      >
        {name}
      </a>
    </li>
  );
}

/* eslint-disable react/prop-types */
export default function Button({ link, name, propsClassName }) {
  return (
    <a href={link} className={`${propsClassName} text-base font-medium`}>
      {name}
    </a>
  );
}

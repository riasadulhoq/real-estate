/* eslint-disable react/prop-types */
export default function Social(props) {
  return (
    <a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
      {props.children}
    </a>
  );
}

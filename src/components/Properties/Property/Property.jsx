/* eslint-disable react/prop-types */
import Bath from "../../SVG/Properties/Bath";
import Bed from "../../SVG/Properties/Bed";

export default function Property({ property }) {
  const {
    title,
    description,
    image,
    imageAlt,
    bedrooms,
    bathrooms,
    price,
    location,
  } = property;
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt={imageAlt} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
        <p className="my-2">{description}</p>
        <h2 className="my-2 text-lg font-medium">{location}</h2>

        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{price}</span>{" "}
          /month
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Bed></Bed>
          <p>
            <span className="font-bold text-gray-900">{bedrooms}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Bath></Bath>
          <p>
            <span className="font-bold text-gray-900">{bathrooms}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}

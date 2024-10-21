/* eslint-disable react/prop-types */
export default function FooterBlog({ link, image, imageName, blogTitle }) {
  return (
    <a href={link} className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={image} alt={imageName} />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {blogTitle}
      </span>
    </a>
  );
}

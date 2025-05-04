import { FaStar, FaEye } from "react-icons/fa";
import { FiShare2, FiBookmark } from "react-icons/fi";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, author, details, image_url, rating, total_view } = news;

  return (
    <div className="card rounded-md shadow-sm bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bg-base-200 w-full p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 text-lg">
          <FiBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      <div className="p-3 border-b-1">
        {/* Title */}
        <h2 className="text-lg font-bold mb-3 cursor-pointer hover:underline">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image_url}
          alt="News"
          className="w-full h-56 object-cover rounded-md mb-3"
        />

        {/* Details (trimmed with Read More link) */}
        <p className="text-sm text-gray-700 mb-3  ">
          {details.slice(0, 150)}...
          <span className="text-blue-500 ml-1 cursor-pointer hover:underline">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 p-4">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-400" />
          <span>{rating.number}</span>
          <span className="badge badge-secondary badge-sm">{rating.badge}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

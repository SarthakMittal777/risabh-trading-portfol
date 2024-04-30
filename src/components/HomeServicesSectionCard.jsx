import { Link } from "react-router-dom";

const HomeServicesSectionCard = ({ service }) => {
  const { name, description, image, slug } = service;

  return (
    <Link
      to={`/services/${slug}`}
      className="group border border-white/60 hover:bg-white w-80 h-[22rem] p-4 rounded-lg shadow-lg hover:shadow-white/70 space-y-2"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-40 aspect-video object-cover bg-primary/70 shadow-md group-hover:shadow-primary/50 rounded-lg"
      />
      <h3 className="text-white group-hover:text-primary text-2xl font-bold font-kalnia">
        {name}
      </h3>
      <p className="text-gray-300 group-hover:text-gray-600">{description}</p>
    </Link>
  );
};

export default HomeServicesSectionCard;

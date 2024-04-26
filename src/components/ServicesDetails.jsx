import { useParams } from "react-router-dom";

const ServicesDetails = ({ service }) => {
  const { name, image, content } = service;
  console.log(service);

  return (
    <div className="space-y-4">
      <h1 className="text-6xl font-kalnia text-primary font-bold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <img
        src={image}
        alt={name}
        className="object-cover aspect-video h-80 rounded-lg"
      />
      <div className="space-y-4 text-primary/80">
        {content.map((para, index) => (
          <p key={index} className="text-lg">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;

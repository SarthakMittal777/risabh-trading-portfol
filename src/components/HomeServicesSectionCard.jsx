const HomeServicesSectionCard = ({ service }) => {
  const { name, description, image } = service;
  return (
    <div className="group border border-white/50 hover:bg-white w-80 h-96 p-4 rounded-lg shadow-lg hover:shadow-white/70 space-y-2">
      <img
        src={image}
        alt={name}
        className="w-full h-40 aspect-video object-cover bg-primary/70 shadow-md group-hover:shadow-primary/50 rounded-lg"
      />
      <h3 className="text-white group-hover:text-primary text-2xl font-bold font-kalnia">{name}</h3>
      <p className="text-gray-300 group-hover:text-gray-600">{description}</p>
    </div>
  );
};

export default HomeServicesSectionCard;

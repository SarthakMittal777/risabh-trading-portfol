const ServicesDetails = ({ service }) => {
  const { name, image, content } = service;
  console.log(service);

  return (
    <div className="space-y-6 text-primary/80">
      <h1 className="text-5xl font-kalnia text-primary font-bold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <div className="lg:w-3/5 space-y-6">
        <p>{content[0] ?? ""}</p>
        <img
          src={image}
          alt={name}
          className="object-cover aspect-video h-72 rounded-lg mx-auto"
        />
      </div>
      <div className="space-y-4 lg:w-3/5">
        {content?.map((para, index) => (
          <p key={index} className={index === 0 && "hidden"}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;

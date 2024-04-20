const HomeWhyUsCard = ({ data, bullet }) => {
  const { title, description } = data;

  return (
    <div className="text-center border border-primary md:w-1/3 lg:w-1/4 rounded-lg px-4 py-6 space-y-4">
      <div className="rounded-full bg-primary/30 mx-auto p-2 w-fit">
        <div className="rounded-full bg-primary/40 p-2 w-fit">
          <div className="rounded-full bg-primary/60 h-10 w-10 aspect-square">
            <span className="font-kalnia text-white text-3xl h-10 w-10 aspect-square rounded-full">
              {bullet}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-kalnia text-primary font-bold text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HomeWhyUsCard;

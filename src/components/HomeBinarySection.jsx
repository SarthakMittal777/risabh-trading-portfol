import { binaryOption } from "../assets";

const HomeBinarySection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 items-center py-8 px-4 text-primary">
      <div className="w-4/5 md:w-8/12">
        <img src={binaryOption} alt="Why trade binary options?" />
      </div>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold font-kalnia">
          Why trade binary options?
        </h2>
        <div className="ml-2 w-4/5 [&>*>*>p]:text-gray-600">
          <div className="py-2 flex gap-2 group hover:bg-gradient-to-r from-primary to-blue-700">
            <div className="bg-primary w-1.5"></div>
            <div>
              <h4 className="font-bold text-2xl group-hover:text-white">
                Predict yes or no.
              </h4>
              <p className="group-hover:text-gray-300">
                Each trade is based around a simple yes or no question.
                Accessing the markets is easier than ever.
              </p>
            </div>
          </div>
          <div className="py-2 flex gap-2 group hover:bg-gradient-to-r from-primary to-blue-700">
            <div className="bg-primary w-1.5"></div>
            <div>
              <h4 className="font-bold text-2xl group-hover:text-white">
                Pick the time.
              </h4>
              <p className="group-hover:text-gray-300">
                Access markets 23 hours a day, five days a week. You have a life
                already - you can trade around it
              </p>
            </div>
          </div>
          <div className="py-2 flex gap-2 group hover:bg-gradient-to-r from-primary to-blue-700">
            <div className="bg-primary w-1.5"></div>
            <div>
              <h4 className="font-bold text-2xl group-hover:text-white">
                Name your reward.
              </h4>
              <p className="group-hover:text-gray-300">
                You know maximum potential profit and loss before you enter, so
                you can pick the contract that{`'`}s right for you.
              </p>
            </div>
          </div>
          <div className="py-2 flex gap-2 group hover:bg-gradient-to-r from-primary to-blue-700">
            <div className="bg-primary w-1.5"></div>
            <div>
              <h4 className="font-bold text-2xl group-hover:text-white">
                Have an escape route.
              </h4>
              <p className="group-hover:text-gray-300">
                Hold contracts to expiry or exit early, minimizing losses or
                protecting profits. Trade your own way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBinarySection;

import { Carousel } from "flowbite-react";
import Illustrator from "../assets/Illustration.png";

const Home = () => {
  return (
    <div className="bg-newtralSilver" id="home">
      <div className="mx-auto h-screen min-h-screen max-w-screen-2xl px-4 lg:px-4">
        <Carousel className="mx-auto w-full">
          <div className="my-28 flex flex-col items-center justify-between gap-12 py-12 md:my-8 md:flex-row-reverse">
            <div className="">
              <img src={Illustrator} alt="Banner 1" />
            </div>
            {/* hero Text */}
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-newtralDGrey md:w-3/4">
                Lessons and insights{" "}
                <span className="loading-snug text-brandPrimary">
                  from 8 years
                </span>{" "}
              </h1>
              <p className="mb-8 text-base text-newtralGrey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 flex flex-col items-center justify-between gap-12 py-12 md:my-8 md:flex-row-reverse">
            <div className="">
              <img src={Illustrator} alt="Banner 1" />
            </div>
            {/* hero Text */}
            <div className="md:w-1/2">
              <h1 className="mb-4 text-5xl font-semibold leading-snug text-newtralDGrey md:w-3/4">
                Lessons and insights{" "}
                <span className="loading-snug text-brandPrimary">
                  from 8 years
                </span>{" "}
              </h1>
              <p className="mb-8 text-base text-newtralGrey">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

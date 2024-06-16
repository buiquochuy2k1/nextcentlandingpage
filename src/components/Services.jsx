import company1 from "../assets/company/company1.png";
import company2 from "../assets/company/company2.png";
import company3 from "../assets/company/company3.png";
import company4 from "../assets/company/company4.png";
import company5 from "../assets/company/company5.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";

const Services = () => {
  const services = [
    {
      title: "Membership Organisations",
      image: icon1,
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      title: "National Associations",
      image: icon2,
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      title: "Clubs And Groups",
      image: icon3,
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
  ];
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-14" id="service">
      <div className="my-8 text-center">
        <h2 className="mb-2 text-4xl font-semibold text-newtralDGrey">
          Our Services
        </h2>
        <p className="text-newtralDGrey">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="my-12 flex flex-wrap items-center justify-between gap-8">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
        </div>

        <div className="mx-auto my-8 mt-20 md:w-1/2">
          <h2 className="mb-2 text-4xl font-semibold text-newtralDGrey">
            Manage your entire community in a single system
          </h2>
          <p className="text-newtralDGrey">Who is Nextcent suitable for?</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-12 md:w-11/12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="mx-auto w-full cursor-pointer rounded-md border-indigo-700 bg-white px-4 py-8 text-center shadow transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-b-4 hover:shadow-lg md:h-80 md:w-[300px]"
            >
              <div>
                <div className="mx-auto h-14 w-14 rounded-br-3xl rounded-tl-3xl bg-[#E8F5E9]">
                  <img src={item.image} alt="" />
                </div>
                <h4 className="mb-2 px-2 text-2xl font-bold text-newtralDGrey">
                  {item.title}
                </h4>
                <p className="text-sm text-newtralDGrey">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import AboutImage from "../assets/icons/IconBigAbout.png";
import iconAbout1 from "../assets/icons/iconAbout1.png";
import iconAbout2 from "../assets/icons/iconAbout2.png";
import iconAbout3 from "../assets/icons/iconAbout3.png";
import iconAbout4 from "../assets/icons/iconAbout4.png";

const About = () => {
  const statsItems = [
    {
      number: "2,245,223",
      nameStats: "Members",
      iconLink: iconAbout1,
    },

    {
      number: "828,825",
      nameStats: "Event Bookings",
      iconLink: iconAbout3,
    },
  ];
  const statsItems2 = [
    {
      number2: "46,328",
      nameStats2: "Clubs",
      iconLink2: iconAbout2,
    },
    {
      number2: "1,826,436",
      nameStats2: "Payments",
      iconLink2: iconAbout4,
    },
  ];
  return (
    <div>
      <div className="mx-auto my-8 max-w-screen-2xl px-4 lg:px-14" id="about">
        <div className="mx-auto flex flex-col items-center justify-between gap-12 md:w-11/12 md:flex-row">
          <div>
            <img className="h-[300px] w-[300px]" src={AboutImage} alt="" />
          </div>
          <div className="mx-auto md:w-3/4">
            <h2 className="mb-4 text-4xl font-semibold text-newtralDGrey md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mb-8 text-sm text-newtralGrey md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="bg-newtralSilver">
        <div className="mx-auto max-w-screen-2xl bg-newtralSilver px-4 py-16 lg:px-14">
          <div className="flex flex-col justify-center md:flex-row">
            {/* text */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-semibold text-newtralDGrey">
                Helping a local{" "}
                <span className="text-brandPrimary">
                  business reinvent itself
                </span>
              </h2>
              <p className="text-sm text-newtralGrey">
                We reached here with our hard work and dedication
              </p>
            </div>
            {/* stats */}
            <div className="mx-auto flex flex-col justify-around gap-12 sm:flex-row sm:items-center md:w-1/2">
              <div className="space-y-8">
                {statsItems.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <img className="h-14 w-14" src={item.iconLink} alt="" />
                      <div>
                        <h4 className="text-2xl font-semibold text-newtralGrey">
                          {item.number}
                        </h4>
                        <p className="text-newtralGrey">{item.nameStats}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-8">
                {statsItems2.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <img className="h-14 w-14" src={item.iconLink2} alt="" />
                      <div>
                        <h4 className="text-2xl font-semibold text-newtralGrey">
                          {item.number2}
                        </h4>
                        <p className="text-newtralGrey">{item.nameStats2}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

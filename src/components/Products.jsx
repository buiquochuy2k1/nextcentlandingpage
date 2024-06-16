import ProductImage from "../assets/icons/iconBigProduct.png";
import ProductImage2 from "../assets/icons/iconBigProduct2.png";
import company1 from "../assets/company/company1.png";
import company2 from "../assets/company/company2.png";
import company3 from "../assets/company/company3.png";
import company4 from "../assets/company/company4.png";
import company5 from "../assets/company/company5.png";

const Products = () => {
  return (
    <div>
      <div className="mx-auto my-8 max-w-screen-2xl px-4 lg:px-14" id="product">
        <div className="mx-auto flex flex-col items-center justify-between gap-12 md:w-11/12 md:flex-row">
          <div>
            <img className="h-[300px] w-[300px]" src={ProductImage} alt="" />
          </div>
          <div className="mx-auto md:w-3/4">
            <h2 className="mb-4 text-4xl font-semibold text-newtralDGrey md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="mb-8 text-sm text-newtralGrey md:w-3/4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="bg-newtralSilver">
        <div className="mx-auto max-w-screen-2xl bg-newtralSilver px-4 py-16 lg:px-14">
          <div className="flex flex-col justify-center gap-8 md:flex-row">
            {/* text */}
            <div className="md:w-1/3">
              <div>
                <img
                  className="h-[300px] w-[300px]"
                  src={ProductImage2}
                  alt=""
                />
              </div>
            </div>
            {/* stats */}
            <div className="mx-auto md:w-2/3">
              <div className="">
                <p className="md:4/5 mb-8 text-sm leading-7 text-newtralDGrey">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse eget lorem eu turpis
                  vestibulum pretium. Suspendisse potenti. Quisque malesuada
                  enim sapien, vitae placerat ante feugiat eget. Quisque
                  vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h5 className="mb-2 text-xl font-semibold text-brandPrimary">
                  Tim Smith
                </h5>
                <p>British Dragon Boat Racing Association</p>
                <div>
                  <div className="flex flex-wrap items-center justify-between">
                    <img src={company1} alt="" className="cursor-pointer" />
                    <img src={company2} alt="" className="cursor-pointer" />
                    <img src={company3} alt="" className="cursor-pointer" />
                    <img src={company4} alt="" className="cursor-pointer" />
                    <img src={company5} alt="" className="cursor-pointer" />
                    <div>
                      <a
                        href=""
                        className="font-bold text-brandPrimary hover:text-neutral-700"
                      >
                        Meet all customers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

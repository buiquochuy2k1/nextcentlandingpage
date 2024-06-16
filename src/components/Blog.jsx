import ImageBlogPost1 from "../assets/imageBlog1.png";
import ImageBlogPost2 from "../assets/imageBlog2.png";
import ImageBlogPost3 from "../assets/imageBlog3.png";

const Blog = () => {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: ImageBlogPost1,
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: ImageBlogPost2,
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: ImageBlogPost3,
    },
  ];
  return (
    <div className="mx-auto my-8 max-w-screen-2xl px-4 lg:px-14" id="blog">
      <div className="mx-auto text-center md:w-1/2">
        <h2 className="mb-2 text-4xl font-semibold text-newtralDGrey">
          Caring is the new marketing
        </h2>
        <p className="text-newtralDGrey">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who is joining the
          community, read about how our community are increasing their
          membership income and lots more.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-between gap-12 md:w-11/12 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((item, index) => (
          <div key={index} className="relative mx-auto mb-12 cursor-pointer">
            <img
              className="transition-all duration-300 hover:scale-95"
              src={item.image}
              alt=""
            />
            <div className="absolute -bottom-12 left-0 right-0 mx-auto rounded-md bg-white px-4 py-8 text-center shadow md:w-3/4">
              <h3 className="mb-3 font-semibold text-newtralGrey">
                {item.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href=""
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

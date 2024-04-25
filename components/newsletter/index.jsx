import { FaPaperPlane } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="newsletter py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="left">
            <h2 className="text-2xl">Newsletter Subcribe</h2>
            <p className="text-sm text-gray-600">
              Subcribe to our newsletter to get the latest update about PSTU and
              much more!
            </p>
          </div>

          <div className="right">
            <form action="">
              <div className="flex justify-between items-center gap-2">
                <input
                  type="text"
                  className="px-4 py-2 rounded-md fs-14 border-gray-200 border w-full h-[45px]"
                  placeholder="Enter Your Email"
                  name=""
                  id=""
                />
                <button className="bg-black px-5 rounded-md py-3 text-white h-[45px]">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

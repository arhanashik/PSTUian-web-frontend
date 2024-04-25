import Link from "next/link";

const Help = () => {
  return (
    <div className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="left">
            <h2 className="text-2xl">Need Help?</h2>
            <p className="text-sm text-gray-600">
              Are you facing any problems or difficulites? You can always reach
              us for any kind of help, inquery or complain. We are just one
              message away.
            </p>
          </div>

          <div className="right text-right flex items-center justify-end">
            <Link
              href="/contact"
              className="bg-black px-6 py-2 rounded-full text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

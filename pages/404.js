import Link from "next/link";

const Error = () => {
  return (
    <div className="error-page py-24">
      <div className="container">

        <div className="text-center mt-6">
        <h3 className="font-bold mont lg:text-4xl text-xl mb-10">Oooooooopppppsssss!!!</h3>
          <h2 className="text-9xl font-extrabold mont">
            <span className="mont font-extrabold first">4</span>
            <span className="mont font-extrabold second">0</span>
            <span className="mont font-extrabold third">4</span>
          </h2>
          <p className="md:text-3xl mt-10 font-bold mont">Requested Page Not Found</p>
          <Link
            href={"/"}
            className="btn bg-black inline-block w-auto text-white font-bold px-8 py-3 mont md:text-xl rounded mt-5"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

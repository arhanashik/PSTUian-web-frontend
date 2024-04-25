import Image from "next/image";
import Link from "next/link";

const FeaturedBanner = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <Image
          src="/assets/pstuian_featured_photo.png"
          width={100}
          height={100}
          className="w-full h-auto full-img rounded-md"
          unoptimized
          alt=""
        />
        <div className="right h-full flex flex-col justify-center items-start">
          <p className="text-gray-400 text-lg">PSTUIAN</p>
          <h2 className="text-2xl font-bold">Download it from Playstore!!</h2>

          <p className="text-gray-500 text-sm mt-4 mb-5">
            To get the best of it, download the mobile application available in
            playstore. It is super easy to use and very handy. If you are a
            PSTUian, you will find it much more interactive too! Available in{" "}
            <Link
              target="_blank"
              className="text-green-500 hover:text-green-700"
              href="https://play.google.com/store/apps/details?id=com.workfort.pstuian"
            >
              Playstore
            </Link>
          </p>

          <Link
            href="https://play.google.com/store/apps/details?id=com.workfort.pstuian"
            target="_blank"
            className="bg-black text-white px-6 py-2 rounded-full"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;

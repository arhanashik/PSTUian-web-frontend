import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container">
        <div className="text-center">
          <Link href="/">
            <span className="text-3xl font-extrabold hover:text-green-700 transition-[0.5s]">
              PSTUian
            </span>
          </Link>
          <p className="flex justify-center items-center gap-3 py-5">
            <Link href="" className="text-black">
              <FaFacebook />
            </Link>
            <Link href="" className="text-black">
              <FaTwitter />
            </Link>
            <Link href="" className="text-black">
              <FaInstagram />
            </Link>
            <Link href="" className="text-black">
              <FaLinkedin />
            </Link>
          </p>
          <p className="text-sm font-bold">
            <Link
              href="terms-and-conditions"
              className="text-green hover:opacity-100 opacity-75"
            >
              Terms and Conditions
            </Link>{" "}
            •{" "}
            <Link
              href="privacy-policy"
              className="text-green hover:opacity-100 opacity-75"
            >
              Privacy Policy
            </Link>
          </p>
          <hr className="my-3" />
          <p className="text-center text-xs text-black">
            Copyright Workfort©{currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

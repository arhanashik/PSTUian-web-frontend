import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 bg-gray-100">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          <Link href="/">
            <span className="text-3xl font-extrabold hover:text-green-700 transition-[0.5s]">PSTUian</span>
          </Link>

          <div className="flex justify-end items-center gap-6">
            <Link className="text-sm font-normal" href="/">Home</Link>
            <Link className="text-sm font-normal" href="/students">Students</Link>
            <Link className="text-sm font-normal" href="/teachers">Teachers</Link>
            <Link className="text-sm font-normal" href="/employees">Employees</Link>
            <Link className="text-sm font-normal" href="/admission">Admission</Link>
            <Link className="text-sm font-normal" href="/donation">Donation</Link>
            <Link className="text-sm font-normal" href="/contact">Contact Us</Link>
            <Link className="text-sm font-normal bg-black text-white px-4 py-2 rounded-[5px]" href="/account">Sign Up / Sign in</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";

const Section = ({ section }) => {
  return (
    <section
      className={`py-14 ${section.direction === "left" ? "bg-gray-100" : ""}`}
    >
      <div className="container">
        <div
          className={`flex gap-12 items-center ${
            section.direction === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div className="w-2/3 min-w-2/3">
            <h2 className="text-2xl font-bold mb-4">{section.name}</h2>
            {section.desc}
          </div>
          <div className="min-w-1/3 w-1/3">
            <Image
              src={section.img}
              alt={section.name}
              width={100}
              height={100}
              className="w-full h-auto full-img"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

import { useEffect } from "react";
import FeaturedBanner from "../components/featured-banner";
import Section from "../components/section";
import Help from "../components/help";
import NewsLetter from "../components/newsletter";

const Home = () => {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import("xterm");
      const term = new Terminal();
      // Add logic with `term`
      return <></>;
    };
    initTerminal();
  }, []);

  const sectionData = [
    {
      id: 1,
      name: "Why PSTUian?",
      desc: (
        <p>
          PSTUian is the very firt step from us to make a common platform for
          all the students, teachers, employees and everyone else. This could be
          the place where we will be able to find anyone from PSTU, communicate
          with them and also help each other however and whenever possible. The
          possibilities are unlimited. If we can just support each other, keep
          communication among us, we can make a better feature for everyone.
          Let&apos;s start that from today!
        </p>
      ),
      img: "/assets/why.svg",
      direction: "left",
    },
    {
      id: 2,
      name: "How to use?",
      desc: (
        <p>
          The UI is very easy to understand for anyone. You just click the menu
          and you will find all the information you were looking for. But there
          is one thing. This is very hard for us to find everyone&apos;s
          information. It is YOU, who can help us. Please, Download the mobile
          app and sign up with your basic information. Also update about
          yourself as much as possible. If you do that, your friend might follow
          you and so on. And in that way someday you will be able to find
          anyone&apos;s information you are looking for. Please let us know if
          you face any kind of problems while using the website or mobile app.
        </p>
      ),
      img: "/assets/how.svg",
      direction: "right",
    },
    {
      id: 3,
      name: "Want to help?",
      desc: (
        <p>
          The greatest help you can do is by using the website and mobile app.
          By adding your information to the system you can take us one step
          further to complete our community.
          <br /> <br />
          The next thing you can do to help us is by opening your heart. A small
          Donation from you can help us a lot. Thousands of hours of work made
          this website and app a reality. We also have future plans for this.
          Also there are maintaince cost and other things. We are doing
          everything for free because we love our university and everyone, same
          as you. Your little support can inspire us a lot for doing better. So,
          please consider to make a DONATION.
        </p>
      ),
      img: "/assets/help.svg",
      direction: "left",
    },
  ];
  return (
    <main>
      <div className="py-10">
        <div className="container">
          <FeaturedBanner />
        </div>
      </div>

      {sectionData.map((section) => (
        <Section section={section} key={section.id} />
      ))}

      <Help />
      <div className="bg-gray-100 py-10">
        <div className="container">
          <FeaturedBanner />
        </div>
      </div>
      <NewsLetter />
    </main>
  );
};

export default Home;

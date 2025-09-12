import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  type OpeningHours = {
    day: string;
    time: string;
  };

  type Socials = {
    name: string;
    icon: any;
    url: string;
  };

  const openingHours: OpeningHours[] = [
    { day: "Mon-Fri", time: "11:00am - 10pm" },
    { day: "Sat", time: "10:00am - 11pm" },
    { day: "Sun", time: "10:00am - 10pm" },
  ];

  const socials: Socials[] = [
    {
      name: "Instagram",
      icon: <FaSquareInstagram size={48} />,
      url: "#",
    },
    {
      name: "X (Twitter)",
      icon: <FaSquareXTwitter size={48} />,
      url: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookSquare size={48} />,
      url: "#",
    },
  ];

  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p, #socials", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });
  }, []);

  return (
    <footer id="contact">
      <div className="flex-center h-screen">
        <div className="col-center md:text-3xl text-2xl">
          <h2 className="font-bold-serif text-6xl">Where to Find Us</h2>
          <h3 className="mt-4">Visit Our Location: </h3>
          <p className="mt-2 text-center">
            Jalan T.B. Simatupang Kavling 17, Cilandak, Jakarta Selatan
          </p>
          <h3 className="font-bold-serif text-6xl mt-4">Contact Us</h3>
          <p className="mt-4">0812-2323-679</p>
          <p className="mt-2">burger@joint.com</p>
          <h3 className="font-bold-serif text-6xl mt-4 mb-2">Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day} className="mt-2">
              {time.day} : {time.time}
            </p>
          ))}
          <h3 className="font-bold-serif md:text-7xl text-6xl mt-4 mb-6">
            Socials
          </h3>
          <div id="socials" className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

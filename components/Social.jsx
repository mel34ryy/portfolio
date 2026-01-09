import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/mel34ryy",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mohamed-moustafa-elashry/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/m.el34ryy/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/mel34ryy/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

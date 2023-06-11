import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] text-white`}>
          This was my website created with ReactJS and TailwindCSS. <br />
          I hope you like it! <br />
          Next: Some Yu-Gi-Oh! cards I like.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((link) => (
          <div
            key={link.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {link.title}
            </h4>
            <ul className="list-none mt-2">
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] ${
                    index !== link.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffdb99] hover:text-secondary cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

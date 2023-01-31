import { FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface IListItemProps {
  title: string;
}

const Footer = () => {
  return (
    <footer className="page-width flex w-full flex-col items-center gap-8 py-8">
      <section className="w-1/2">
        <ul>
          <ListItem title="Contact" />
          <ListItem title="About me" />
          <ListItem title="Services" />
        </ul>
      </section>
      <section>
        <ul className="flex gap-6">
          <li>
            <FiInstagram size={32} />
          </li>
          <li>
            <FaBehance size={32} />
          </li>
          <li>
            <FaLinkedinIn size={32} />
          </li>
        </ul>
      </section>
      <p>copyright all rights reserved. ©</p>
    </footer>
  );
};

const ListItem = ({ title }: IListItemProps) => (
  <li className="w-full border-b border-gray-300 p-4 text-center">
    <p>{title}</p>
  </li>
);

export default Footer;

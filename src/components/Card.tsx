import Image from "next/image";
import { StaticImageData } from "next/image";

interface ICardProps {
  title: string;
  button: string;
  img: StaticImageData;
  href: string;
}

const Card = ({ title, button, img, href }: ICardProps) => {
  return (
    <article className="flex flex-col">
      <div className="relevant mb-2 h-64 w-full overflow-hidden shadow">
        <Image
          src={img}
          alt={`${title} image`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h5>{title}</h5>
      <a className="text-gray-500 underline" href={href}>
        {button}
      </a>
    </article>
  );
};

export default Card;

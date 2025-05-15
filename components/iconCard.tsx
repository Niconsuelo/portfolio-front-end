import Image from "next/image";
import { ReactNode } from "react";
//skills imagen
interface IconCardProps {
  src: string;
  alt: string;
  label: ReactNode;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ src, alt, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center border-2 rounded-lg w-[70px] h-[60px] p-4 lg:w-[160px] lg:h-[160px] border-pink-900 lg:border-pink-900 lg:opacity-50 lg:hover:opacity-100 lg:transition lg:duration-300 hover:border-4">

      <Image
        src={src}
        alt={alt}
        width={60}
        height={50}
        className="lg:transform lg:hover:scale-110 lg:transition lg:duration-300"
      />
      <p className="font-thin uppercase mt-2">{label}</p>
    </div>
  );
};

export default IconCard;

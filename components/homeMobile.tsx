import { useCallback, useRef } from "react";
import AvatarImage from "./avatarImagen";
import Button from "./button";

interface HomeProps {
  goToDownAboutProps: () => void;
}

const HomeMobile: React.FC<HomeProps> = ({ goToDownAboutProps }) => {
  return (
    <section className="flex flex-col lg:hidden mt-16 gap-4 relative z-10">
      <section className="flex flex-col lg:hidden mt-10 gap-4 relative z-10">
        <div className="flex flex-col gap-4 sm:gap-2 md:gap-1 mb-2 sm:ml-0">
          <h2 className="font-roboto font-extralight text-h2 text-white mt-3">
            Hi ! 
          </h2>
          <h2 className="font-roboto font-extralight text-h2 text-white mb-6">
           Im Nicole Aburto
          </h2>
          <h1 className="font-extrabold text-h1 text-white uppercase leading-tight">
            Web  Developer !
          </h1>

         
        </div>

        <div className="flex items-center justify-center mt-7 mb-6">
          <AvatarImage />
        </div>

        <div className="flex flex-col ml-14">
        <p className="text-white text-p leading-relaxed mt-5 mb-4 ml-12">
            Madrid, España.
          </p>
          <Button
            buttonText="Let's Start"
            className="bg-gradient-to-b from-[#FA5252] to-[#DD2476] text-white hover:from-[#F6F7FB] hover:to-[#F6F7FB] hover:text-[#DD2476] py-2 px-4 mt-6 font-thin shadow-[4px_4px_0px_#F6F7FB] hover:shadow-[4px_4px_0px_#FA5252] h-10 w-48 transition-all hover:font-medium"
            onClick={goToDownAboutProps}
          />
        </div>
      </section>
    </section>
  );
};
export default HomeMobile;
